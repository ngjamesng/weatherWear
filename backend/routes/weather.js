const express = require("express");
const router = express.Router();
// const LocationConditions = require("../models/locationConditions");
const { getByNameOrZip, getByCoordinates } = require("../utils/openWeatherAPI");

/** handle submission form from frontend */
router.post("/", async (req, res, next) => {
  try {
    const { city, zip } = req.body;
    // if (!city && !zip) return next();
    const data = await getByNameOrZip({ city, zip });
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

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