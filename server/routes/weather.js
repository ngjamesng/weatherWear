const express = require("express");
const router = express.Router();
const locationConditions = require("../models/locationConditions");
const { getLocationWOEID } = require("../utils/metaWeatherAPI");
// server/utils/metaWeatherAPI.js

/** handle submission form from fronend */
router.post("/", async (req, res, next) => {
  try {
    let {location, date} = req.body;
    let { title, woeid, location_type } = await getLocationWOEID(location);
    //check city name & date, and see if it is in the database
      // if so, send the data from database to the front-end
    // else, query the API 
      //save the response from the API
      // send the response to the front-end
    res.json(resp);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;