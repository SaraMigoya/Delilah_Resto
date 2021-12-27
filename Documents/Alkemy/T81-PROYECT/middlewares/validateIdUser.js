const { Role } = require('../models/index');
const { setResponseWithError } = require("../utils/setResponse");


const validateUser = async (req, res = response, next) => {

    const { id:idUserParams } = req.params;

    const { id, roleId } = req.user;

    const  rol = await Role.getRole(roleId);

    if (!req.user) {
      return setResponseWithError(res, 404);
    }

    if( idUserParams != id && rol.name !== "Admin"){
        return setResponseWithError(res, 403);
     }
  
    next();
  };

  module.exports = { validateUser }