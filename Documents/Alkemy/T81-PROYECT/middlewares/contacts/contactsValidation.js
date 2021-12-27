
const { fieldValidator } = require('../field-validator');
const { check } = require('express-validator');

const validateCreateContact = [

    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    
    fieldValidator,

]

module.exports = {validateCreateContact}