const { body } = require("express-validator");
const { INVALID_ORDER, ID_NOT_EXIST, ERROR_INVALID_ORG_ID, NAME_STRING, IMAGE_REQUIRED, INVALID_FORMAT_IMAGE } = require("../../constants/messages");
const { Slide } = require('../../models/index');
const { Organization } = require('../../models/index');
const VALID_IMAGE_FORMATS = ['jpg', 'jpeg', 'png'];
const isBase64 = require('is-base64');

const slideValidation = [
    body("image", IMAGE_REQUIRED).not().isEmpty(),
    body("image", NAME_STRING).isString(),
    body("image", INVALID_FORMAT_IMAGE).custom((imagebase64, {req})=>{
        if (isBase64(imagebase64, {mimeRequired: true, allowMime: true})){
            const typeFile = imagebase64.match(/[^:/]\w+(?=;|,)/)[0]; //file extension
            if(typeFile){         
                req.body.typeFile = typeFile;
                return VALID_IMAGE_FORMATS.indexOf(typeFile)!==-1
            }
        }
        return false;
    }),
    body("organizationId", NAME_STRING).not().isEmpty(),
    body("organizationId", ID_NOT_EXIST).isInt(),
    body("organizationId", ERROR_INVALID_ORG_ID).custom( async (orgId, {req})=>{

        const org = await Organization.getOrganization(orgId);
        if(!org) throw new Error(ERROR_INVALID_ORG_ID);

    }),
    body("order", INVALID_ORDER).custom( async (order, {req}) => {
        if(order<=0){
            throw new Error(INVALID_ORDER);
        }
        
        if(order){
            //Verified that that order does not exist
            if(typeof req.body.organizationId === String) parseInt(req.body.organizationId)
            const existsThatOrder = await Slide.findOrder(req.body.organizationId, order)

            //If that order already exists, is invalid
            if(existsThatOrder){
                throw new Error(INVALID_ORDER);
            }
        }
        return true;
    })
];

module.exports = slideValidation;