const { Slide } = require('../models/index');
const log = require("../utils/logger");
const resp = require("../middlewares/apiResponse");
const { StatusCodes } = require("http-status-codes");
const { SLIDE_UPDATED, SLIDE_CREATED,
    SLIDE_DETAILS, SLIDE_DELETED, ALL_SLIDES, ID_NOT_EXIST } = require("../constants/messages");
const decodeBase64 = require("../utils/decodeBase64");

const newSlide = async (req, res, next) => {
    try {
        let {order, image, text, organizationId, typeFile} = req.body;

        const fileName = 'slide' + '_' + organizationId.toString() + '_' + order.toString();
        
        const url = await decodeBase64(process.env.AWS_SLIDES_BUCKET_NAME, image, fileName, typeFile);
        const newSlide = await Slide.createSlide({order, imageUrl: url, text, organizationId})

        log.info(`Slide created: ${JSON.stringify(newSlide)}`);

        res
        .status(StatusCodes.CREATED)
        .json(resp({ 
            data: newSlide, 
            message: SLIDE_CREATED }));

    } catch (err) {
        log.error("Error", err);
        next(err);
    }

}

const getSlides = async (req, res, next) => {
    try {
        const attributes = ['imageUrl', 'order', 'organizationId'];
        const slides = await Slide.getSlides(attributes);
        
        res
        .status(StatusCodes.CREATED)
        .json(resp({ 
            data: slides, 
            message: ALL_SLIDES }));

    } catch (err) {
        log.error("Error", err);
        next(err);
    }
}

const getOneSlide = async (req, res, next) => {
    try {
        const slide = req.body.slideFetched;
        
        res
        .status(StatusCodes.CREATED)
        .json(resp({ 
            data: slide, 
            message: SLIDE_DETAILS }));

    } catch (err) {
        log.error("Error", err);
        next(err);
    }

}

const deleteSlide = async (req, res, next) => {
    try {
        
        const { id } = req.params;
        const slide = req.body.slideFetched;
        
        await Slide.deleteSlide(id);
        log.info(`Slide deleted: ${JSON.stringify(id)}`);

        res
        .status(StatusCodes.CREATED)
        .json(resp({ 
            data: {slide}, 
            message: SLIDE_DELETED }));

    } catch (err) {
        log.error("Error", err);
        next(err);
    }

}

const updateSlide = async (req, res, next) => {
    try {
        let {image, typeFile, ...data} = req.body;
        let url='';
        const {id} = req.params;
        const slide = req.body.slideFetched;
        
        if(image){
            if(!data.order) data.order = slide.order;
            const fileName = 'slide' + '_' + data.organizationId.toString() + '_' + data.order.toString();
            const url = await decodeBase64(process.env.AWS_SLIDES_BUCKET_NAME, image, fileName, typeFile);
            data.imageUrl = url
        }
        
        await Slide.updateSlide(id, data);
        log.info(`Slide updated id: ${JSON.stringify(id)}`);

        res
        .status(StatusCodes.CREATED)
        .json(resp({ 
            data: {id, image: url === '' ? slide.imageUrl : data.imageUrl}, 
            message: SLIDE_UPDATED }));


    } catch (err) {
        log.error("Error", err);
        next(err);
    }

}

module.exports = {
    newSlide,
    deleteSlide,
    getSlides,
    getOneSlide,
    updateSlide
}