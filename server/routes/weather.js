const express = require("express");
const router = express.Router();

/** handle submission form from fronend */
router.post("/", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({ msg: "REACHED BACKEND API CALL!" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;