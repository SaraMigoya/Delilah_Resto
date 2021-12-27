const { check } = require("express-validator");
const { Members } = require("../../models/index");
const { ID_NOT_EXIST } = require("../../constants/messages");
const { setResponseWithError } = require("../../utils/setResponse");
const { fieldValidator } = require("../field-validator");
const log = require("../../utils/logger");


const idMemberRemove = check("id").exists().isInt().custom(async (id = "", res) => {

    const member = await Members.getMemberById(id);

    if (member.deletedAt !== null) {  

      log.error("This member was previously removed")  

      return (res, 400, ID_NOT_EXIST, true);
    }
});

idDestroy = [
    idMemberRemove,
    fieldValidator
];

module.exports = {idDestroy};