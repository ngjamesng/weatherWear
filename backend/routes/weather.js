const express = require("express");
const router = express.Router();
const Results = require("../models/Results");
const { getByNameOrZip, getByCoordinates } = require("../utils/openWeatherAPI");

router.get("/", async (req, res, next)=>{
  try {
    let data = await Results.getResults();
    return res.json(data);
  } catch (err) {
    return next(err);
  }
})

/** handle city or zip submission form from frontend as a POST request */
router.post("/", async (req, res, next) => {
  try {
    const { city, zip } = req.body;
    // if (!city && !zip) return next();
    const data = await getByNameOrZip({ city, zip });
    Results.addResult(data);
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

/**
 * 
 *  handle coordinates submission from frontend as a GET request. 
 * We do not want to save coordinate data because of privacy!!! 
 * 
 * */
router.get("/coordinates/", async (req, res, next) => {
  try {
    const { lon, lat } = req.query;
    // if (!lon || !lat) return next();
    const data = await getByCoordinates({lon, lat});
    return res.json(data);
  } catch (err) {
    return next(err);
  }
})

// router.get("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     let condition = await LocationConditions.getConditionById(id);
//     return res.json(condition[0]);
//   } catch (err) {
//     return next(err);
//   }
// });

module.exports = router;