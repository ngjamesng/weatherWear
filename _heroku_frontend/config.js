/** Shared config for application; can be req'd many places. */


require("dotenv").config();

const SECRET = process.env.SECRET_KEY || 'test';

const _REDIRECT_TO_FRONT_END = process.env.FRONT_END_REDIRECT_URL || "https://weatherwear.jamesng.dev/"
const STATUS_CODE = 302; //302 == found, 307 == temporary redirect

const PORT = +process.env.PORT || 3000;

module.exports = {
  PORT,
  _REDIRECT_TO_FRONT_END,
  STATUS_CODE
};
