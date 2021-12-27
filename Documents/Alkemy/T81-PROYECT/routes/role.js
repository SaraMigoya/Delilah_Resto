var express = require("express");
const { newRole, removeRole, getAllRoles } = require("../controllers/roleController");

const { validarJWT } = require('../middlewares/validarJWT');
const { esAdminRole } = require('../middlewares/validarRoles');

var router = express.Router();

/*Create a new role*/
router.post("/", newRole);
/*Get all roles*/
router.get("/", getAllRoles);
/*delete a role*/
router.delete("/:id",validarJWT, esAdminRole, removeRole);

module.exports = router;
