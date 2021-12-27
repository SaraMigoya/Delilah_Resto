const { Comment } = require('../models/index')

const jwt = require('jsonwebtoken')
const { setResponseWithError } = require("../utils/setResponse");
const { INVALID_COMMENT_USER, ERROR_INVALID_COMMENT_ID } = require('../constants/messages');
const { StatusCodes } = require('http-status-codes');
const decodeToken = async (req, res = response, next) => {
    const token = req.header("Authorization")
    const { userId, roleId } = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params
    const comment = await Comment.getCommentById(id)
    console.log(roleId)
    if(!comment){
        return setResponseWithError(res,StatusCodes.NOT_FOUND,ERROR_INVALID_COMMENT_ID )
    }
    if(comment.userId == userId || roleId == 1){
        next()
    }
    else{
        return setResponseWithError(res,StatusCodes.BAD_REQUEST,INVALID_COMMENT_USER)
    }
    
    // console.log({userId, roleId})
    
    
}

module.exports = {decodeToken}
