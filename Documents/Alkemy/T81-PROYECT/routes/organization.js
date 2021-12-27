const express = require('express');
const { getOneOrganization, getAllOrganizations, updateOrganization } = require('../controllers/organizationController');
const router = express.Router();

const { tokenAdminValidation, organizationValidId, organizationValidation, organizationValidationPublic } = require("../middlewares/organization/index");

router.get('/all/public', getAllOrganizations);
router.get('/:id/public', organizationValidId, getOneOrganization);
router.get('/public', getOneOrganization);
router.put('/:id/public', tokenAdminValidation, organizationValidation, updateOrganization);
router.put('/public', tokenAdminValidation, organizationValidationPublic, updateOrganization);

module.exports = router;