const { check } = require("express-validator");
const { Activities } = require("../../models/index");
const { ID_NOT_EXIST } = require("../../constants/messages");
const { setResponseWithError } = require("../../utils/setResponse");
const { fieldValidator } = require("../field-validator");
const log = require("../../utils/logger");
const logger = require("../../utils/logger");



const _idRequired = check("id").not().isEmpty();

const _idIsNumeric = check("id").isNumeric();

const _idRemoved = check("id").exists().isInt().custom(async (id = "", res) => {

  const activityFound = await Activities.getActivity(id);
  
  if (activityFound.deletedAt !== null) {

    log.error("This activity was previously removed")

    return setResponseWithError(res, 400, ID_NOT_EXIST, true);
   
  }
});

deleteActivityValidate = [
  _idRequired,
  _idIsNumeric,
  _idRemoved,
  fieldValidator
];

module.exports = deleteActivityValidate;
