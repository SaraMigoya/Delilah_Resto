const express = require('express');
const router = express.Router();
const { postMember, getMembers, removeMember, upgrateMember, pagination, getMemberId } = require('../controllers/memberController');
const { removeValidator, iDexist } = require('../middlewares/members');




router.get('/', getMembers)

router.get('/pagination', pagination)

router.get('/:id', iDexist, getMemberId)

router.post('/', postMember)

router.delete('/:id', removeValidator,removeMember)

router.put('/:id', iDexist, upgrateMember)

module.exports = router;