const { Members } = require('../models/index')
const log = require('../utils/logger');
const { ERROR_INVALID_MEMB_ID, MEMB_NOT_FOUND, MEMBER_UPDATED, FOUND_MEMBER, GET_ALL_MEMBERS, MEMBER_CREATED, MEMBER_DELETED } = require('../constants/messages');
const { StatusCodes } = require('http-status-codes');
const {messages} = require("../utils/pagination")

const getMemberId = async (req, res, next) => {

    try {
        const { id } = req.params;
        const member = await Members.getMemberById(id)
        
        log.info(FOUND_MEMBER)

        res
            .status(StatusCodes.OK)
            .json({message: FOUND_MEMBER, data: member});

    } catch (error) {
        log.error('Error', error)
        next(error)

    }
}

const getMembers = async (req, res, next
) => {

    try {
        const members = await Members.getAllMembers()

        log.info(GET_ALL_MEMBERS)

        res
            .status(StatusCodes.OK)
            .json({message:GET_ALL_MEMBERS, data: members});

    } catch (error) {
        log.error(error)
        next(error)

    }
}

const pagination = async (req, res, next
) => {

    try {
        const page =parseInt(req.query.page)
        const size=10
        const startIndex=(page-1)*size

        const members = await Members.getCount(startIndex,size)
        
        const cant= members.count
        const msj= messages(cant,page,startIndex,size,"members")

        if (Math.ceil(cant/size)<page) { 
            log.error(ERROR_PAGINATION)
            return setResponseWithError(res,404,ERROR_PAGINATION)}
    
        res
        .status(StatusCodes.OK)
        .json({data:members, message:msj})
        
    } catch (error) {
        log.info(error)
        next()
    }

}
const postMember = async (req, res, next) => {

    try {
        const data = req.body;
        const member = await Members.createMember(data)
        
        log.info(MEMBER_CREATED)

        res
            .status(StatusCodes.CREATED)
            .json({message:MEMBER_CREATED, data:member});

    } catch (error) {
        log.error(error);
        next(error);

    }
}
const upgrateMember = async (req, res, next) => {

    try {
        const { id } = req.params;
        const bodyMember = req.body
        const member = await Members.updateMember(bodyMember, id)

        log.info(MEMBER_UPDATED)

        res
            .status(StatusCodes.OK)
            .json(`${MEMBER_UPDATED}, ${bodyMember.name}`);
 
    } catch (error) {
        log.error(error);
        next(error);
    }
}
const removeMember = async (req, res, next) => {

    try {
        const { id } = req.params;
        const member = await Members.deleteMember(id)
     
        log.info(MEMBER_DELETED)
        res
            .status(StatusCodes.OK)
            .json({message:MEMBER_DELETED, data:member});
   

    } catch (error) {

        log.error('Error', error)
        next()
    }
}







module.exports = { pagination, getMemberId, getMembers, postMember, upgrateMember, removeMember, }