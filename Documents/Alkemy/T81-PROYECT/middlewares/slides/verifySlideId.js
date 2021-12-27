const { Slide } = require('../../models/index');
const { ID_NOT_EXIST } = require("../../constants/messages");
const log = require("../../utils/logger");
const { check } = require("express-validator");

const verifySlideId = 
    check("id", ID_NOT_EXIST).custom(async (id, {req}) => {
            if(!id){
                throw new Error(ID_NOT_EXIST);
            }
            const slide = await Slide.getSlide(id)
            if(!slide){
                throw new Error(ID_NOT_EXIST);
            }
            req.body.slideFetched = slide.dataValues;
    })



module.exports = verifySlideId;