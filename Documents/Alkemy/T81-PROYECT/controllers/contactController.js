const { Contacts } = require('../models/index')
const log = require('../utils/logger');

const { StatusCodes } = require('http-status-codes');
const { CONTACT_CREATED, GET_ALL_CONTACTS } = require('../constants/messages');
const {sendEmailContact} = require('../utils/sendEmailContact');
const sgMail = require("@sendgrid/mail");

const postContact = async (req, res, next) => {

    try {
        const data = req.body;
        const contact = await Contacts.createContact(data)

        log.info(CONTACT_CREATED)
        sendEmailContact(data.email, data.name)
      
        res
            .status(StatusCodes.CREATED)
            .json({message:CONTACT_CREATED, data:contact});
     
        

    } catch (error) {
        log.error(error);
        next(error);

    }
}

const getContacts = async (req, res, next
    ) => {
    
        try {
            const contact = await Contacts.getAllContacts()
            
            log.info(GET_ALL_CONTACTS)
            
            res
                .status(StatusCodes.OK)
                .json({message:GET_ALL_CONTACTS, data:contact});
            
        } catch (error) {
            log.error('Error', error)
            next(error)
        }
    };

module.exports = {postContact, getContacts}