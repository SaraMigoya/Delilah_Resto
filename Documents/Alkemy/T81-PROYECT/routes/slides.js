const express = require('express');
const { deleteSlide, newSlide, getSlides, updateSlide, getOneSlide } = require('../controllers/slidesController');
const { tokenAdminValidation, newSlideValidation, verifySlideId, updateSlideValidation } = require('../middlewares/slides/index');
const router = express.Router();

router.use(tokenAdminValidation);

router.get('/', getSlides);
router.get('/:id', verifySlideId, getOneSlide);
router.post('/', newSlideValidation, newSlide);
router.put('/:id', updateSlideValidation, updateSlide);
router.delete('/:id', verifySlideId, deleteSlide);

module.exports = router;