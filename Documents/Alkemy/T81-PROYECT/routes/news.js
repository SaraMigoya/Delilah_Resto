var express = require("express");
var router = express.Router();
const { getNewOne, createNew,newUpdate,pagination,deleteNew, getNewAll} = require("../controllers/newController");
const idParamsValidation = require("../middlewares/idParamsValidation");
const {validateNew} = require("../middlewares/new-validator");
const {esAdminRole} = require("../middlewares/validarRoles");
const {validarJWT} = require("../middlewares/validarJWT");
const { getCommentsPerNew } = require("../controllers/commentController");


/* POST news create. */
router.post("/",validarJWT,esAdminRole,validateNew,createNew);

/* GET news pagination. */
router.get('/pagination',pagination);

/* GET news all */
router.get("/",getNewAll);

/* PUT news update. */
router.put("/:id",[validarJWT,esAdminRole,idParamsValidation,validateNew ],newUpdate);
/* GET new by ID. */
router.get("/:id", idParamsValidation, getNewOne);

/* DELETE news create. */
router.delete("/:id",validarJWT,esAdminRole,idParamsValidation,deleteNew);

router.get('/:id/comments',validarJWT,getCommentsPerNew);



module.exports=router;  