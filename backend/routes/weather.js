const express = require("express");
const router = express.Router();
const LocationConditions = require("../models/locationConditions");
const { getLocationWOEID, getWeatherFromAPI } = require("../utils/metaWeatherAPI");

/** handle submission form from fronend */
router.post("/", async (req, res, next) => {
  try {
    const { location, date } = req.body;
    const { woeid, title: city_name, location_type } = await getLocationWOEID(location);
    // //check city name & date, and see if it is in the database
    let condition = await LocationConditions.getCondition({ woeid, date });
    if (!condition[0]) {
      const apiResp = await getWeatherFromAPI({ woeid, date });
      const dbResp = await LocationConditions.addCondition({ woeid, city_name, location_type, condition: apiResp });
      condition[0] = { ...dbResp, city_name };
    }
    return res.json(condition[0]);
  } catch (err) {
    return next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    let conditions = await LocationConditions.getConditions();
    return res.json(conditions);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let condition = await LocationConditions.getConditionById(id);
    return res.json(condition[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;