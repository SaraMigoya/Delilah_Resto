const { StatusCodes } = require('http-status-codes');
const { UPLOAD_SUCCESSFUL } = require('../constants/messages');
const {uploadToBucket} = require('../helpers/s3');
const resp = require("../middlewares/apiResponse")
const { setResponseWithError } = require('../utils/setResponse')

const upload = async (req, res, next) => {
    try {
        const bucket = req.body.bucket;
        const file = req.files.file;
    
        const result = await uploadToBucket(bucket,file);
    
        res
        .status(StatusCodes.OK)
        .json(resp({data: result, message: UPLOAD_SUCCESSFUL }))

    }
    catch(err){
        next(err)
    }
    
};

module.exports = {
    upload
}