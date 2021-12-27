const { body } = require("express-validator");
const { NAME_REQUIRED, NAME_STRING, CONTENT_REQUIRED, CONTENT_STRING } = require("../../constants/messages");
const { fieldValidator } = require('../field-validator')

const _nameRequired = body("name", NAME_REQUIRED).not().isEmpty()

const _nameIsString = body("name", NAME_STRING).isString()

const _contentRequired = body("content", CONTENT_REQUIRED).not().isEmpty()

const _contentIsString = body("content", CONTENT_STRING).isString()

const activityValidate = [
    _nameRequired,
    _nameIsString,
    _contentRequired,
    _contentIsString,
    fieldValidator,
];

module.exports = activityValidate;