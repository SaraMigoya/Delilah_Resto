const { check } = require("express-validator");
const { ID_NOT_EXIST } = require("../../constants/messages");
const { Members } = require('../../models/index');

const memberIdValidation = check("id").custom(async (id = "") => {

    const member = await Members.getMemberById(id);

    if (!member) {
        throw new Error(ID_NOT_EXIST)
    }
    return true;
})

module.exports = {memberIdValidation} ;