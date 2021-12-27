const { Comment } = require('../models/index')
const { StatusCodes } = require('http-status-codes') 
const log = require("../utils/logger");
const resp = require("../middlewares/apiResponse")
const { Logform } = require('winston')
const {  SERVER_ERROR, COMMENT_CREATED,GET_BODY_COMMENTS, ERROR_INVALID_COMMENT_ID, COMMENT_UPDATED, COMMENT_DELETED, FOUND_COMMENT} = require('../constants/messages');
const { setResponseWithError } = require('../utils/setResponse');

const createComment = async (req, res = response, next) => {
    try {
        
        const data = req.body
        const comment = await Comment.createComment(data)
        log.info(`${COMMENT_CREATED}: ${JSON.stringify(comment)}`)
       res
           .status(StatusCodes.CREATED)
           .json(resp({ data: comment, message: COMMENT_CREATED}))
    } catch (err) {
        log.error("Error", err)
        next(setResponseWithError(
            res,
            500,
            SERVER_ERROR
        ))
    }
       
   }


   const getCommentsPerNew = async (req, res, next) =>{
    try {
        
        const {id} = req.params
        const comments = await Comment.getCommentsPerNew(id)
        if(comments){
            res
               .status(StatusCodes.OK)
               .json(resp({data: comments, message: FOUND_COMMENT}))
        }else {
            res
            .status(StatusCodes.NOT_FOUND)
            .json(resp({data: comments, message: ERROR_INVALID_COMMENT_ID}))
        }
        
    } catch (err) {
        next(err)
    }
}


   const getCommentById = async (req, res, next) =>{
    try {
        
        const {id} = req.params
        const comment = await Comment.getCommentById(id)
        if(comment){
            res
               .status(StatusCodes.OK)
               .json(resp({data: comment, message: FOUND_COMMENT}))
        }else {
            res
            .status(StatusCodes.NOT_FOUND)
            .json(resp({data: comment, message: ERROR_INVALID_COMMENT_ID}))
        }
        
    } catch (err) {
        next(err)
    }
}



   const getBodyComments = async (req, res = response, next) => {

    try {
        const comments = await Comment.getBodyComments()
        log.info(`${GET_BODY_COMMENTS}`)
    
        res
            .status(StatusCodes.OK)
            .json(resp({ data: comments, message: GET_BODY_COMMENTS}))
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



const updateComment = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = req.body
        const cm = await Comment.getCommentById(id)
        if(!cm) {
            return res.json(resp({ message: ERROR_INVALID_COMMENT_ID})
            )}
        const comment = await Comment.updateComment(data, id)
        log.info(`${COMMENT_UPDATED}`)
        console.log(id)
            res
            .status(StatusCodes.OK)
            .json(resp({ data: comment, message: COMMENT_UPDATED}))
    } catch (error) {
      log.error(error);
      next(error);
    }
  } 

  const deleteComment = async (req, res, next) => {
    try{
        const {id} = req.params
        const cm = await Comment.getCommentById(id)
        if(!cm) {
            return res.json(resp({ message: ERROR_INVALID_COMMENT_ID})
            )}
        const comments = await Comment.deleteComment(id)
        log.info(`${COMMENT_DELETED}`)

        res
        .status(StatusCodes.OK)
        .json(resp({ data: comments, message: COMMENT_DELETED}))
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



   module.exports = { createComment, getBodyComments, updateComment, getCommentById, deleteComment,getCommentsPerNew}