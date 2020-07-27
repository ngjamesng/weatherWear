const express = require("express");
const app = express();

const { _REDIRECT_TO_FRONT_END, STATUS_CODE } = require("./config");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  const statusCode = STATUS_CODE;
  return res.redirect(statusCode, _REDIRECT_TO_FRONT_END) //301 == moved permanently
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = app;
