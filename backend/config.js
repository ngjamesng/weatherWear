/** Shared config for application; can be req'd many places. */


require("dotenv").config();

const SECRET = process.env.SECRET_KEY || 'test';

const PORT = +process.env.PORT || 3000;

// database is:
//
// - on Heroku, get from env var DATABASE_URL
// - in testing, 'weatherwear-test'
// - else: 'weatherwear'

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "weatherwear-openweather-test";
} else {
  DB_URI  = process.env.DATABASE_URL || 'weatherwear-openweather';
}

console.log("Using database", DB_URI);

module.exports = {
  SECRET,
  PORT,
  DB_URI,
};
