const { response } = require("express");
const { Role } = require("../models/index");
const { setResponseWithError } = require("../utils/setResponse");

const { NO_ROLE,  NO_ROLE_VALID } = require("../constants/messages")


const esAdminRole = async (req, res = response, next) => {


  if (!req.user) {
    return setResponseWithError(res, 403);

  }
  const { roleId } = req.user;

  const  rol = await Role.getRole(roleId);

  if(!rol){
    return setResponseWithError(res, 500, NO_ROLE);
  }

  if (rol.name !== "Admin") {
    return setResponseWithError(res, 403, NO_ROLE_VALID);
  }

  next();
};


const esOwnershipRole = async (req, res = response, next) => {


  if (!req.user) {
    return setResponseWithError(res, 403);

  }
  const { roleId } = req.user;

  const  rol = await Role.getRole(roleId);

  if(!rol){
    return setResponseWithError(res, 500, NO_ROLE);
  }

  if (rol.name !== "Admin" || rol.name !== "Ownership") {
    return setResponseWithError(res, 403, NO_ROLE_VALID);
  }

  next();
};


module.exports = {
  esAdminRole,
  esOwnershipRole
}; 