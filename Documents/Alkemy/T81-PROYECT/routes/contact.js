const express = require('express');
const router = express.Router();
const {postContact, getContacts} = require('../controllers/contactController');
const { validateCreateContact } = require('../middlewares/contacts/contactsValidation');
const { esAdminRole } = require('../middlewares/validarRoles');
const { validarJWT } = require('../middlewares/validarJWT');


router.post('/',validateCreateContact, postContact)

        .get('/', validarJWT, esAdminRole, getContacts);


module.exports = router; 