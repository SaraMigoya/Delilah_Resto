const express = require('express');
const { createComment, getBodyComments, updateComment, deleteComment } = require('../controllers/commentController');
const { validateCreateComment } = require('../middlewares/commentValidated');
const idParamsValidation = require('../middlewares/idParamsValidation');
const { esAdminRole } = require('../middlewares/validarRoles');
const { validarJWT } = require('../middlewares/validarJWT');
const { decodeToken } = require('../middlewares/decodeComment')
const router = express.Router();

router.post('/', validarJWT, validateCreateComment , createComment);
router.get('/', validarJWT, esAdminRole, getBodyComments)
router.put('/:id',decodeToken,updateComment)
router.delete('/:id',decodeToken,deleteComment)

// router.get('/pagination',pagination);
// router.get('/', getAllCategories)
// router.get('/:id', validarJWT, esAdminRole, getCategoryById);
// router.put('/:id',validarJWT, esAdminRole, updateCategory);
// router.delete('/:id', validarJWT, esAdminRole,  deleteCategory);


module.exports = router;
