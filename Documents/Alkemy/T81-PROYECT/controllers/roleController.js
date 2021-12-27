const { Role } = require("../models/index");
const response = require('express')

const datesLog = require("../utils/logger")

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            Create Role
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const newRole = async (req, res = response, next) => {
  try {
    const rol = req.body;

    const role = await Role.createRole(rol);

    datesLog.info(`Role created: ${JSON.stringify(role)}`);

    res.status(200).json(role);
  } catch (error) {
    next(console.log(error));
  }
};

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            Get Roles
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const getAllRoles = async (req, res = response, next) => {
  try {
    const roles = await Role.getRoles();

    datesLog.info(`Roles found`);

    res.status(200).json(roles);
  } catch (error) {
    next(datesLog.error(error));
  }
};

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            Delete Role
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const removeRole = async (req, res, next) => {
  try {
    const { id } = req.params;

    const role = await Role.deleteRole(id);

    res.status(200).send("Deleted Role");
  } catch (error) {
    next(console.log(error));
  }
};

module.exports = { newRole, getAllRoles, removeRole };
