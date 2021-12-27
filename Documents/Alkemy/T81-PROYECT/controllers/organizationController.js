const log = require("../utils/logger");
const resp = require("../middlewares/apiResponse");
const { Organization } = require('../models/index');
const { StatusCodes } = require("http-status-codes");
const {ALL_ORGANIZATIONS, ORGANIZATION_DELETED,
    ORGANIZATION_UPDATED, ORGANIZATION_CREATED,
    DATA_ORGANIZATION} = require('../constants/messages');

//Public fields (to change what we show to the public endpoint) 
const publicFields = ['id', 'name', 'image', 'phone', 'address', 'facebook', 'linkedin', 'instagram'];

//*** GET ALL ORGANIZATIONS ***//
const getAllOrganizations = async (req, res, next) => {

    try {
        const organizations = await Organization.getAllOrganizationsPublic(publicFields);

        res
        .status(StatusCodes.OK)
        .json(resp({ 
            data: organizations, 
            message: ALL_ORGANIZATIONS }));

    } catch (err) {
        log.error("Error", err);
        next(err);
    }

}

//***** GET ONE ORGANIZATION *****//
const getOneOrganization = async (req, res, next) => {
    
    try {
        
        const { id } = req.params;  
        const organization = await Organization.getOrganizationPublic(publicFields, id);
        
        res
        .status(StatusCodes.OK)
        .json(resp({ 
            data: organization, 
            message: DATA_ORGANIZATION }));

    } catch (err) {
        log.error("Error", err);
        next(err);
    }

}

//***** UPDATE AN ORGANIZATION *****//
const updateOrganization = async (req, res, next) => {

    try {
        const { id } = req.params;
        const data = req.body;
        const organization = await Organization.getOrganizationPublic(publicFields, id);

        const updatedOrganization = await Organization.updateOrganization(data, organization);
        
        res
        .status(StatusCodes.OK)
        .json(resp({ 
            data: updatedOrganization, 
            message: ORGANIZATION_UPDATED }));

    } catch (err) {
        log.error("Error", err);
        next(err);
    }
}

//***** CREATE A NEW ORGANIZATION *****//
const addOrganization = async (req, res, next) => {

    try {
        const data = req.body;
        const organization = await Organization.createOrganization(data)

        res
        .status(StatusCodes.OK)
        .json(resp({ 
            data: organization, 
            message: ORGANIZATION_CREATED }));

    } catch (err) {
        log.error("Error", err);
        next(err);
    }

}

//***** DELETE AN ORGANIZATION *****//
const deleteOrganization = async (req, res, next) => {

    try {
        const {id} = req.body;

        const idDeleted = await Organization.deleteOrganization(id);
        
        res
        .status(StatusCodes.OK)
        .json(resp({ 
            data: idDeleted, 
            message: ORGANIZATION_DELETED }));

    } catch (err) {
        log.error("Error", err);
        next(err);
    }
}

module.exports = {
    getAllOrganizations,
    getOneOrganization,
    addOrganization,
    updateOrganization,
    deleteOrganization
}