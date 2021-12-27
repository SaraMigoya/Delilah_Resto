const { body } = require("express-validator");
const {NAME_REQUIRED, NAME_STRING, IMAGE_REQUIRED, IMAGE_STRING, PHONE_NUMBER, ADDRESS_STRING} = require("../../constants/messages");

const organizationValidation = [
    body("name", NAME_REQUIRED).not().isEmpty(),
    body("name", NAME_STRING).isString(),
    body("image", IMAGE_REQUIRED).not().isEmpty(),
    body("image", IMAGE_STRING).isString(),
    body("phone", PHONE_NUMBER).isInt(),
    body("address", ADDRESS_STRING).isString()
];

module.exports = organizationValidation;