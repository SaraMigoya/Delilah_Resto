const { response } = require("express");
const jwt = require("jsonwebtoken");

const { User } = require("../models/index");
const log = require("../utils/logger")

const { 
  INVALID_TOKEN,
  NO_TOKEN
} = require("../constants/messages")

const validarJWT = async (req, res = response, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(403).json({ msg: NO_TOKEN });
  }
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);


    const user = await User.prototype.getUserById(userId);

    // usuario no existe en DB

    if (!user) {
      return res
        .status(400)
        .json({ msg: INVALID_TOKEN });
    }

    //usuario eliminado

    if (user.deletedAt !== null) {
      return res
        .status(400)
        .json({ msg: INVALID_TOKEN});
    }

    req.user = user;

    next();

  } catch (err) {
    log.error(err);
    return res.status(401).json({ msg: INVALID_TOKEN });
  }
};

module.exports = {
  validarJWT,
};