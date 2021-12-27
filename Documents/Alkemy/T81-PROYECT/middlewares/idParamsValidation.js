const { param } = require("express-validator");
const { fieldValidator } = require("./field-validator");

const idParamsValidation = [
    param("id", "Id is required").not().isEmpty(),
    param("id", "Id invalid").isInt(),
    fieldValidator
];


module.exports = idParamsValidation;