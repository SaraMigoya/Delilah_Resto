const jwt = require("jsonwebtoken");
const log = require("../utils/logger")

const createJWT = (user) => {
  return new Promise((resolve, reject) => {

  const { id:userId, firstName, lastName, email, image, password, roleId  } = user;

    const payload = { userId, firstName, lastName, email, image, password, roleId  };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
      (err, token) => {
        if (err) {
          log.error(err);
          reject("Token could not be created");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = { createJWT };
