const slideValidation = require("./slideValidation");
const generateOrderOptional = require("./generateOrder");
const updateSlide = require("./updateSlideValidation");
const { fieldValidator } = require('../field-validator');
const { validarJWT } = require("../validarJWT");
const { esAdminRole } = require("../validarRoles");
const verifyId = require("./verifySlideId");

const tokenAdminValidation = [
    validarJWT,
    esAdminRole
]

const newSlideValidation = [
    slideValidation, 
    generateOrderOptional, 
    fieldValidator
]

const updateSlideValidation = [
    updateSlide,
    fieldValidator
]

const verifySlideId = [
    verifyId,
    fieldValidator
]

module.exports = {
    tokenAdminValidation,
    newSlideValidation,
    updateSlideValidation,
    verifySlideId
}