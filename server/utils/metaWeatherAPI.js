const axios = require('axios');
const BASE_URL = 'https://www.metaweather.com/api/location/';

async function getLocationWOEID(name) {
  try {
    let resp = await axios.get(`${BASE_URL}search/?query=${name}`);
    return resp.data[0];
  } catch (err) {
    console.error("error:", err);
  }

}

async function getWeatherFromAPI({ woeid, date }) {
  try {
    // date must be formmatted with yyyy/mm/dd for API
    let formattedDate = date.toString().split("-").join("/");
    let resp = await axios.get(`${BASE_URL}${woeid}/${formattedDate}`);
    return resp.data[0];
  } catch (err) {
    console.error("error:", err);
  }
}

module.exports = {
  getLocationWOEID,
  getWeatherFromAPI
};