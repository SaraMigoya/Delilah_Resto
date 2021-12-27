const { New } = require("../models/index");
const log = require("../utils/logger");
const {ERROR_UPDATE_NEW,ERROR_INVALID_NOVELTY_ID,ERROR_PAGINATION,NEW_DELETED,SERVER_ERROR,NEW_EDITH,FOUND_NOVELTY,NOVELTY_CREATED,NOVELTY_UPDATED,GET_ALL_NEWS} = require('../constants/messages');
const { setResponseWithError } = require('../utils/setResponse');
const {messages} = require("../utils/pagination");
const logger = require("../utils/logger");
const { StatusCodes } = require('http-status-codes') 
const resp = require("../middlewares/apiResponse")


const getNewOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const nw = await New.getNewOne(id);

    if (nw) {
      res
        .status(StatusCodes.OK)
        .json(resp({ data: nw, message: FOUND_NOVELTY }))
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json(resp({ data: nw, message: ERROR_INVALID_NOVELTY_ID }))
    }

  } catch (error) {
    next(error);
  }
};

const getNewAll = async (req, res, next) => {
  try {
    const nw = await New.getNewAll();
    console.log(nw)
    res.status(StatusCodes.OK).json(resp({ data: nw, message: GET_ALL_NEWS }));
  } catch (error) {
    log.error("Error", err);
    next(setResponseWithError(res, 500, SERVER_ERROR));
  }
};

const createNew = async (req, res, next) => {
  try {
    const data = req.body;
    const nw = await New.createNew(data);
    res
      .status(StatusCodes.CREATED)
      .json(resp({ data: nw, message: NOVELTY_CREATED }));
  } catch (error) {
    log.error("Error", err);
    next(setResponseWithError(res, 500, SERVER_ERROR));
  }
};

const edithNew = async (req, res) => {
  try {
    const { id, ...data } = req.body;

    const nw = await New.edithNew(id, data);
    res.send(NEW_EDITH);
  } catch (error) {
    next(error);
  }
};

const deleteNew = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await New.deleteNew(id);

    if (deleted != 0) {
      return res
        .status(StatusCodes.OK)
        .json(resp({ data: categories, message: NEW_DELETED }));
    }
    return res.json(resp({ message: ERROR_INVALID_NOVELTY_ID }));
  } 
  catch (error) {
    log.error(`Error: ${JSON.stringify(err)}`);
    next(setResponseWithError(res, 500, SERVER_ERROR));
  }
};

const newUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const nw = await New.getNewOne(id);

    if (!nw) {
      return res.json(resp({ message: ERROR_INVALID_NOVELTY_ID}))

    }
    const updateNw = await New.newUpdate(id, data);

    if (!updateNw) {
      log.error(ERROR_UPDATE_NEW);
      return setResponseWithError(res, 400, ERROR_UPDATE_NEW);
    }
    return res.json(resp({ data: updateNw, message: NOVELTY_UPDATED }));
  } catch (error) {
    log.error("Error", err);
    next(setResponseWithError(res, 500, SERVER_ERROR));
  }
};

const pagination = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page);
    const size = 10;
    const startIndex = (page - 1) * size;
    const nws = await New.findAndCountAllNew(startIndex, size);
    const cant = nws.count;
    const msj = messages(cant, page, startIndex, size, "news");

    if (Math.ceil(cant / size) < page) {
      logger.error(ERROR_PAGINATION);
      return setResponseWithError(res, 404, ERROR_PAGINATION);
    }

    res.status(200).json({
      nws,
      message: msj,
    });
  } catch (error) {
    logger.info(error);
    next();
  }
};

module.exports = {
  pagination,
  edithNew,
  createNew,
  deleteNew,
  newUpdate,
  getNewAll,
  getNewOne,
};
