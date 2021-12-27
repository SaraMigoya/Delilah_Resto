const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const fieldValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BAD_REQUEST).json(errors);
  }
  next();
};
module.exports = {
  fieldValidator,
};