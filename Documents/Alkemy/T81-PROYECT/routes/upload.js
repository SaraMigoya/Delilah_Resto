const express = require('express')
const router = express.Router();
const { upload } = require('../controllers/uploadController')
const { esAdminRole } = require('../middlewares/validarRoles')
const { validarJWT } = require('../middlewares/validarJWT') 
router.post('/',validarJWT,esAdminRole,upload);

module.exports = router