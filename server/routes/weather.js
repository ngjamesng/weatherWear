const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.send("REACHED WEATHER API CALL!")
  } catch (err) {
    return next(err);
  }
})

module.exports = router;