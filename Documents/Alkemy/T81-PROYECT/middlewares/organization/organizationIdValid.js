const { check } = require("express-validator");
const { ID_NOT_EXIST } = require("../../constants/messages");
const { Organization } = require('../../models/index');

const organizationIdValidation = check("id", ID_NOT_EXIST).custom( async (id, {req})=>{
        const organization = await Organization.getOrganization(id);

        if(!organization){
            throw new Error(ID_NOT_EXIST)
        }
        return true;
    })

module.exports = organizationIdValidation;