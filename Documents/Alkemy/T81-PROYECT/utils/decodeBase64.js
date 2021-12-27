const fs = require('fs');
const {uploadToBucket} = require("../helpers/s3")
const log = require("../utils/logger");
const {ERROR_AWS} = require("../constants/messages");
const decodeBase64 = (bucketName, imagebase64, imageName, typeFile) => {

    const base64Parsed = imagebase64.split(';base64,').pop();

    let url='';
    const filePath = Date.now().toString()+'.'+typeFile;//Create file in the fs (and then delete it)

    return new Promise ((resolve,reject)=>{

        fs.writeFile(filePath, base64Parsed, 'base64', async function(err) {
            try {
                
                const file = {
                    tempFilePath: filePath,
                    name: imageName + '.' + typeFile
                }

                const data = await uploadToBucket(bucketName, file);
                url=data.Location;
                
            } catch (err) {
                reject(err);
            }  
            
           
        fs.unlink(filePath, (err)=>{
            try {
                if(url===''){
                    throw new Error (ERROR_AWS);
                }
                resolve(url);
            } catch (err) {
                reject(err);
            }
        })
    })          

    })
}

module.exports = decodeBase64;