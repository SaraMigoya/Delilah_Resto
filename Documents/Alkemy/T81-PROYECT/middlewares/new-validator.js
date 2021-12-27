const { fieldValidator } = require('./field-validator');
const { check } = require('express-validator');

const validateNew = [

    check("name", "Name is required").not().isEmpty(),
    check("name", "Invalid value").isString(),
    check("image", "Name is required").not().isEmpty(),
    check("image", "Invalid value").isString(),
    check("content", "Name is required").not().isEmpty(),
    check("content", "Invalid value").isString(),
    
    fieldValidator,

]

module.exports = {validateNew}