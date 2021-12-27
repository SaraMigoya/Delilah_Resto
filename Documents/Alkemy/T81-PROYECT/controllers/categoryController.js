
const { Category } = require('../models/index')
const { StatusCodes } = require('http-status-codes') 
const log = require("../utils/logger");
const resp = require("../middlewares/apiResponse")
const { messages} = require('../utils/pagination')
const { Logform } = require('winston')
const {ERROR_PAGINATION, SERVER_ERROR, CATEGORY_CREATED, GET_ALL_CATEGORIES, FOUND_CATEGORY, CATEGORY_UPDATED, CATEGORY_DELETED, ERROR_INVALID_CATEGORY_ID} = require('../constants/messages');
const { setResponseWithError } = require('../utils/setResponse');



const getAllCategories = async (req, res = response, next) => {
    try {
    const categories = await Category.getAllCategories()
    log.info(`${GET_ALL_CATEGORIES}`)

    res
        .status(StatusCodes.OK)
        .json(resp({ data: categories, message: GET_ALL_CATEGORIES}))
}
catch(err){
    log.error("Error", err)
    next(
        setResponseWithError(
            res,
            500,
            SERVER_ERROR
        )
    )
}
}

const getCategoryById = async (req, res, next) =>{
    try {
        
        const {id} = req.params
        const category = await Category.getCategoryById(id)
        if(category){
            res
               .status(StatusCodes.OK)
               .json(resp({data: category, message: FOUND_CATEGORY}))
        }else {
            res
            .status(StatusCodes.NOT_FOUND)
            .json(resp({data: category, message: ERROR_INVALID_CATEGORY_ID}))
        }
        
    } catch (err) {
        next(err)
    }
}

const createCategory = async (req, res = response, next) => {
 try {
     
     const data = req.body
     const category = await Category.createCategory(data)
     log.info(`${CATEGORY_CREATED}: ${JSON.stringify(category)}`)
    res
        .status(StatusCodes.CREATED)
        .json(resp({ data: category, message: CATEGORY_CREATED}))
 } catch (err) {
     log.error("Error", err)
     next(setResponseWithError(
         res,
         500,
         SERVER_ERROR
     ))
 }
    
}

const updateCategory = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = req.body
        const cg = await Category.getCategoryById(id)
        if(!cg) {
            return res.json(resp({ message: ERROR_INVALID_CATEGORY_ID})
            )}
        const category = await Category.updateCategory(data, id)
        log.info(`${CATEGORY_UPDATED}`)
        console.log(id)
            res
            .status(StatusCodes.OK)
            .json(resp({ data: category, message: CATEGORY_UPDATED}))
        
            
        }
        
        // if(category) res.status(200).json("Update category");
        // else{res.status(400).json({ message: "This category doesn't exist" })}
        
    
    catch (err) {
        log.error("Error", err)
        next(
            setResponseWithError(
                res,
                500,
                SERVER_ERROR
            )
        )
    }
}

const deleteCategory = async (req, res, next) => {
    try{
        const {id} = req.params
        const cg = await Category.getCategoryById(id)
        if(!cg) {
            return res.json(resp({ message: ERROR_INVALID_CATEGORY_ID})
            )}
        const categories = await Category.deleteCategory(id)
        log.info(`${CATEGORY_DELETED}`)

        res
        .status(StatusCodes.OK)
        .json(resp({ data: categories, message: CATEGORY_DELETED}))
    } catch (err) {
        log.error(`Error: ${JSON.stringify(err)}`)
        next(
            setResponseWithError(
                res,
                500,
                SERVER_ERROR
            )
        )
    }
}

const pagination = async (req,res,next)=>{

    try {
        const page =parseInt(req.query.page)
        const size=10
        const startIndex=(page-1)*size
        const categories=await Category.findAndCountAllCategory(startIndex,size)
        const cant= categories.count
        const msj= messages(cant,page,startIndex,size,"categories")

        if (Math.ceil(cant/size)<page) { 
            log.error(ERROR_PAGINATION)
            return setResponseWithError(res,404,ERROR_PAGINATION)}
    
        res.status(200).json({
            categories, message:msj
        })
        
    } 
    
    catch (error) {
        log.info(error)
        next()
    }

}
 


module.exports = {
    pagination,getAllCategories,getCategoryById,createCategory,updateCategory,deleteCategory
}