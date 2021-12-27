const express = require("express");
const {
  getAllActivities,
  defineActivity,
  upgradeActivity,
  removeActivity,
} = require("../controllers/activitiesController");
const { activityValidate, putActivityValidate, deleteActivityValidate } = require("../middlewares/activities/index");

const router = express.Router();

/* GET activities listing. */
router.get("/", getAllActivities);

/* POST activity. */
router.post("/", activityValidate, defineActivity);

/* PUT activity. */
router.put("/:id", putActivityValidate, upgradeActivity);

/* DELETE one activity */
router.delete("/:id", deleteActivityValidate, removeActivity);

module.exports = router;
