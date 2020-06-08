const express = require("express");
const router = express.Router();
// const LocationConditions = require("../models/locationConditions");
const { getByNameOrZip } = require("../utils/openWeatherAPI");

/** handle submission form from fronend */
router.get("/", async (req, res, next) => {
  try {
    const { cityOrZip } = req.body;

    const data = await getByNameOrZip(cityOrZip)
    return res.json(data);
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