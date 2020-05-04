const express = require("express");
const app = express();
const ExpressError = require('./utils/expressError');
const weatherRouter = require("./routes/weather");
const cors = require("cors");
app.use(express.json());
app.use(cors());


app.use("/weather", weatherRouter);

app.get("/cron", (req, res, next) => {
  try {
    return res.json({cronResponse:"CRON JOB SUCCESSFUL!"});
  } catch (err) {
    return next(err);
  }
})

/** 404 handler */

app.use(function (req, res, next) {
  const err = new ExpressError('Not Found', 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = app;