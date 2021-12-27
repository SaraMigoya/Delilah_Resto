var express = require('express');
const { deleteUser, updateUser } = require('../controllers/userController');
const { validarJWT } = require('../middlewares/validarJWT');
const { esAdminRole } = require('../middlewares/validarRoles');
const { validateUser } = require('../middlewares/validateIdUser');

var router = express.Router();

router.patch('/:id',validarJWT,validateUser, updateUser)

router.delete('/:id',validarJWT, esAdminRole ,deleteUser)


module.exports = router;
