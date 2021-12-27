const { validarJWT } = require("../validarJWT");
const { esAdminRole } = require("../validarRoles");
const { idDestroy } = require("./memberRemoveValidate");
const {fieldValidator} = require("../field-validator");
const {memberIdValidation} = require("./memberIdValidate")

removeValidator = [
    validarJWT,
    esAdminRole,
    idDestroy
]
iDexist = [
memberIdValidation,
fieldValidator
]

module.exports = {
    removeValidator,
    iDexist
}