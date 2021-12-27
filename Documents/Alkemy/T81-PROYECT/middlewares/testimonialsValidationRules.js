const {fieldValidator} = require('./field-validator')
const {check}= require('express-validator')

const validateTestimonial =[
check("name" , "Name is required").not().isEmpty(),
check("name" , "Name must be alphabetic between 3 and 60 characters").isLength({min:3, max: 60 }),
check("content" , "Content is required").not().isEmpty(),
check("content" , "Content must be alphabetic between 10 and 255 characters").isLength({min:10, max:255 }),

    fieldValidator,]


module.exports ={validateTestimonial}