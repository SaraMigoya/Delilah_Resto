const { Slide } = require('../../models/index');
const log = require("../../utils/logger");

const generateOrderOptional = async (req, res, next) => {
    try {
        if (!req.body.order){
            const lastOrder = await Slide.getLastOrderSlide(req.body.organizationId);
            if(lastOrder){
                req.body.order = lastOrder.order+1;
            }else{
                req.body.order=1;
            }
        }
        next();
    } catch (err) {
        log.error("Error", err);
        next(err);
    }
}


module.exports = generateOrderOptional;