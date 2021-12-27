const { response } = require("express");
const bcryptjs = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const resp = require("../middlewares/apiResponse");

const { User } = require("../models/index");


const sendEmail = require("../utils/sendEmail");
const log = require("../utils/logger");
const { setResponseWithError } = require("../utils/setResponse");


const { 
  INVALID_EMAIL_OR_PASSWORD,
  EMAILREGISTERED,
  USER_UPDATED,
  USER_DELETED,
  SERVER_ERROR
} = require('../constants/messages')

const { createJWT } = require("../helpers/createJWT");
const parseJwt = require("../utils/decodeToken");

//=====================================
//            ONE USER  = GET
//=====================================
const getUser = async (req, res = response) => {
  try {
    const { id } = req.params;

    const user = await User.prototype.getUserById(id);

    res.status(200).json({ user });
  } catch (error) {
    log.error(error);
    return setResponseWithError(res, 500, SERVER_ERROR);
  }
};

//=====================================
//           ALL USERS = GET
//=====================================

const getUsers = async (req, res = response) => {
  try {
    const users = await User.prototype.getAll();
    res.status(200).json({ users });

  } catch (error) {
    log.error(error);
    return setResponseWithError(res, 500, SERVER_ERROR);
  }
};

//=====================================
//           UPDATE USER = PATCH
//=====================================

const updateUser = async (req, res = response) => {
  const { id: idbody, createdAt, ...body } = req.body;
  try {
    const { id } = req.params;

    await User.prototype.update(id, body);

    res.status(200).json({ msg: USER_UPDATED });

  } catch (error) {
    log.error(error);
    return setResponseWithError(res, 500, SERVER_ERROR);
  }
};

//=====================================
//           DELETE USER = DELETE
//=====================================

const deleteUser = async (req, res = response) => {
  try {
    const { id } = req.params;

    const userDb = await User.prototype.delete(id);

    res.status(200).json({ msg: USER_DELETED, userDb });

  } catch (error) {
    log.error(error);
    return setResponseWithError(res, 500, SERVER_ERROR);
  }
};

//=====================================//
//           AUTH CONTROLLERS          //
//=====================================//

//=====================================
//           LOGIN USER = POST
//=====================================
const loginUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Check Email in database
    const user = await User.prototype.getUserByEmail(email);
    if (!user) {
      log.warn(INVALID_EMAIL_OR_PASSWORD);
      return setResponseWithError(res, 401, INVALID_EMAIL_OR_PASSWORD, false);
    }

    // Check User is active
    if (user.deletedAt !== null) {
      log.warn(INVALID_EMAIL_OR_PASSWORD);
      return setResponseWithError(res, 401, INVALID_EMAIL_OR_PASSWORD, false);
    }

    // Check password
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      log.warn(INVALID_EMAIL_OR_PASSWORD);     
      return setResponseWithError(res, 401, INVALID_EMAIL_OR_PASSWORD, false);

    }

    //Create JWT
    const token = await createJWT(user);

    res.status(200).json({
      user,
      token,
    });

  } catch (error) {
    log.error(error);
    return setResponseWithError(res, 500, SERVER_ERROR);
  }
};

//=====================================
//          REGISTER USER = POST
//=====================================
const registerUser = async (req, res = response) => {
  try {
    const { email, ...body } = req.body;
    
    const userDB = await User.prototype.getUserByEmail(email);
    
    if (userDB) {
      log.warn(EMAILREGISTERED);
      return setResponseWithError(res, 401, EMAILREGISTERED);
    }
    const user = await User.prototype.saveUser({ email, ...body });

    //Create JWT
    const token = await createJWT(user);

    //Sendgrid
    sendEmail(email)
    
    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    log.error(error);
    return setResponseWithError(res, 500, SERVER_ERROR);
  }
};

//=====================================
//          ME = GET
//=====================================
const me = async (req, res, next) => {
  try {
    const token = req.header("Authorization")

    const decodeToken = parseJwt(token)

    const id = decodeToken.userId

    const user = await User.prototype.getUserById(id);

    res.status(StatusCodes.OK).json(resp({ data: user, message: 'mis datos' }));
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  loginUser,
  registerUser,
  me
};
