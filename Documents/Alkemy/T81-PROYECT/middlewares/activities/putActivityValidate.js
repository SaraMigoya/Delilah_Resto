const { check } = require("express-validator");
const { Activities } = require("../../models/index");
const { ID_NOT_EXIST } = require("../../constants/messages");
const { setResponseWithError } = require("../../utils/setResponse");
const { fieldValidator } = require("../field-validator");



const _idRequired = check("id").not().isEmpty();
const _idIsNumeric = check("id").isNumeric();
const _idExist = check("id", ).exists().isInt().custom(async (id = "") => {
  const activityFound = await Activities.findOne( { where: { id } } );
  
  if (!activityFound || activityFound === null) {
    return setResponseWithError(res, 400, ID_NOT_EXIST, true);
  }
});

putActivityValidate = [
  _idRequired,
  _idIsNumeric,
  _idExist,
  fieldValidator
];

module.exports = putActivityValidate;
