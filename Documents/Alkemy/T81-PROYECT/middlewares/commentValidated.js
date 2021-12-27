
const { fieldValidator } = require('./field-validator');
const { check } = require('express-validator');

const validateCreateComment = [

    check("newId", "NewId is required").not().isEmpty(),
    check("body", "Body is required").not().isEmpty().isString(),
    check("userId","UserId is required").not().isEmpty(),
    
    fieldValidator,

]

module.exports = {validateCreateComment}