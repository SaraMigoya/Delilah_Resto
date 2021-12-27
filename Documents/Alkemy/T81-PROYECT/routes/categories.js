const express = require('express');
const { createCategory ,deleteCategory,getAllCategories, updateCategory, getCategoryById ,pagination} = require('../controllers/categoryController');
const { validateCreateCategory } = require('../middlewares/categoryValidated');
const idParamsValidation = require('../middlewares/idParamsValidation')
const { esAdminRole } = require('../middlewares/validarRoles')
const { validarJWT } = require('../middlewares/validarJWT') 

const router = express.Router();

router.post('/',validateCreateCategory , createCategory);
router.get('/pagination',pagination);
router.get('/', getAllCategories)
router.get('/:id', validarJWT, esAdminRole, getCategoryById);
router.put('/:id',validarJWT, esAdminRole, updateCategory);
router.delete('/:id', validarJWT, esAdminRole,  deleteCategory);


module.exports = router;
