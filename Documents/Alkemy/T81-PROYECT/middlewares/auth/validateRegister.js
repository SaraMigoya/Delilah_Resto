const { fieldValidator } = require('../field-validator');
const { check } = require('express-validator');



const validateRegister = [
    check("email", "Email is required").isEmail(),
    check("firstName", "First name is required").not().isEmpty(),
    check("firstName", "First name must be a string").isString(),
    check("lastName", "Last name is required").not().isEmpty(),
    check("lastName", "Last name must be a string").isString(),
    check("password", "Password is required").not().isEmpty(),
    check("password","Password must include one lowercase character, one uppercase character, a number, and a special character.")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
    fieldValidator,
]

module.exports = { validateRegister }