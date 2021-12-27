const { Activities } = require("../models/index");
const { StatusCodes } = require("http-status-codes");
const log = require("../utils/logger");
const resp = require("../middlewares/apiResponse");
const { Logform } = require("winston");
const { setResponseWithError } = require("../utils/setResponse");
const { SERVER_ERROR, ACTIVITY_CREATED, GET_ALL_ACTIVITIES, ACTIVITY_UPDATED, ACTIVITY_DELETED } = require("../constants/messages")

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      CREATE ACTIVITY
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const defineActivity = async (req, res = response, next) => {
  try {
    
    const activity = req.body;
    
    const activ = await Activities.createActivities(activity);

    log.info(`${ACTIVITY_CREATED}: ${JSON.stringify(activ)}`);

    res
      .status(StatusCodes.CREATED)
      .json(resp({ data: activ, message: ACTIVITY_CREATED }));
  } catch (err) {
    next(err)
  }
};

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      GET ALL ACTIVITIES
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const getAllActivities = async (req, res = response, next) => {
  try {
    const activities = await Activities.getActivities();

    log.info(`${GET_ALL_ACTIVITIES}`);

    res
      .status(StatusCodes.OK)
      .json(resp({ data: activities, message: GET_ALL_ACTIVITIES }));
  } catch (err) {
    log.error("Error", err);
    next(err);
  }
};

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
GET ONE ACTIVITY
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const getOneActivity = async (req, res = response, next) => {
  try {
    const { id } = req.params;

    const activity = await Activities.getActivity(id);

    log.info(`${FOUND_ACTIVITY}`);

    res
      .status(StatusCodes.OK)
      .json(resp({ data: activity, message: FOUND_ACTIVITY }));
  } catch (err) {
    log.error("Error", err);
    next(err);
  }
};

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      UPDATE ACTIVITY
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const upgradeActivity = async (req, res, next) => {
  try {

    const { id } = req.params;

    const activity = req.body;

    const activ = await Activities.updateActivities(activity, id);

    log.info(`${ACTIVITY_UPDATED}`);

    res
      .status(StatusCodes.OK)
      .json(resp({ data: activity, message: ACTIVITY_UPDATED }));
  } catch (err) {
    log.error("Error", err);    
    next(err);
  }
};

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      DELETE ACTIVITY
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const removeActivity = async (req, res, next) => {
  try {
    const { id } = req.params;

    const activities = await Activities.deleteActivities(id);

    log.info(`${ACTIVITY_DELETED}`);

    res
      .status(StatusCodes.OK)
      .json(resp({ data: activities, message: ACTIVITY_DELETED }));
  } catch (err) {
    log.error(`Error: ${JSON.stringify(err)}`);
    next(err);
  }
};

module.exports = {
  getAllActivities,
  getOneActivity,
  defineActivity,
  upgradeActivity,
  removeActivity,
};
