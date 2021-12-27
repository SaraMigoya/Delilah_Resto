const { fieldValidator } = require('../field-validator');
const { check } = require('express-validator');



const validateLogin = [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    fieldValidator,
]

module.exports = { validateLogin }