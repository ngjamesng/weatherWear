const express = require("express");
const router = express.Router();
const LocationConditions = require("../models/locationConditions");
const { getLocationWOEID, getWeatherFromAPI } = require("../utils/metaWeatherAPI");

/** handle submission form from fronend */
router.post("/", async (req, res, next) => {
  try {
    let { location, date } = req.body;
    let { woeid, title: city_name, location_type } = await getLocationWOEID(location);
    // //check city name & date, and see if it is in the database
    let condition = await LocationConditions.getCondition({ woeid, date });
    if (!condition[0]) {
      condition = await getWeatherFromAPI({ woeid, date });
      let dbResp = await LocationConditions.addCondition({ woeid, city_name, location_type, condition });
      condition[0] = { ...dbResp, city_name };
    }
    return res.json(condition[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;