const { Testimonial } = require("../models/index");
const {messages} = require("../utils/pagination")
const log = require('../utils/logger');

const getAllTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.getAllTestimonials();
    return res.status(200).json({ testimonials });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getTestimonialById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.getTestimonialById(id);
    if (testimonial) {
      return res.status(200).json({ testimonial });
    }
    return res.status(404).send("User with the specified ID does not exists");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createTestimonial = async (req, res, next) => {
  try {
    const data = req.body;
    const testimonial = await Testimonial.createTestimonial(data);
    return res.status(201).json({ testimonial });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// UPDATE en POSTMAN

const updateTestimonial = async (req, res, next) => {

  try {
    const { id } = req.params;
    const data = req.body
    const member = await Testimonial.updateTestimonial(data, id)

    log.info("testimonial update")

    res
        .status(200)
        .json(`${data.name}`);

} catch (error) {
    log.error(error);
    next(error);
}

};

const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Testimonial.deleteTestimonial(id);
    if (deleted) {
      return res.status(200).send("Testimonial deleted");
    }
    throw new Error("Testimonial not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const paginationTestimonial = async (req, res, next
  ) => {
  
      try {
          const page =parseInt(req.query.page)
          const size=10
          const startIndex=(page-1)*size
  
          const testimonial = await Testimonial.getCountTestimonial(startIndex,size)
          
          const cant= testimonial.count
          const msj= messages(cant,page,startIndex,size,"testimonial")
  
          if (Math.ceil(cant/size)<page) { 
              log.error(ERROR_PAGINATION)
              return setResponseWithError(res,404,ERROR_PAGINATION)}
      
          res
          .status(200)
          .json({data:testimonial, message:msj})
          
      } catch (error) {
          log.info(error)
          next()
      }
  
  }

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
  paginationTestimonial
};
