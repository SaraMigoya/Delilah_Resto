const { validarJWT } = require("../validarJWT");
const { esAdminRole } = require("../validarRoles");
const organizationId = require("./organizationIdValid");
const newOrganizationValidation = require("./organizationValidation");
const { fieldValidator } = require('../field-validator');

const tokenAdminValidation = [
    validarJWT,
    esAdminRole
]

const organizationValidId = [
    organizationId,
    fieldValidator
]

const organizationValidation = [
    organizationId,
    newOrganizationValidation,
    fieldValidator
]

const organizationValidationPublic = [
    newOrganizationValidation,
    fieldValidator
]

module.exports = {
    tokenAdminValidation,
    organizationValidId,
    organizationValidation,
    organizationValidationPublic
}