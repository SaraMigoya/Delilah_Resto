var express = require('express');
var router = express.Router();

const { validateRegister, validateLogin } = require('../middlewares/auth/index')

const { registerUser, loginUser, me } = require('../controllers/userController')

/* POST user REGISTER */
router.post('/register', validateRegister, registerUser);

router.post('/login', validateLogin, loginUser);

router.get('/me', me);



module.exports = router;
