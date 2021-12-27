
const { fieldValidator } = require('./field-validator');
const { check } = require('express-validator');

const validateCreateCategory = [

    check("name", "Name is required").not().isEmpty(),
    check("name", "Invalid value").isString(),
    
    fieldValidator,

]

module.exports = {validateCreateCategory}