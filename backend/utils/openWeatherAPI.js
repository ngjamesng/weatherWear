const axios = require('axios');
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

async function getByNameOrZip(cityOrZip) {
  const key = process.env.OPEN_WEATHER_API_KEY
  try {

    let resp = await axios.get(`${BASE_URL}weather`, {
      params:
      {
        zip: cityOrZip,
        q: cityOrZip,
        units: "metric",
        appid: key
      }
    });
    return resp.data;
  } catch (err) {
    console.error("error:", err);
  }
}


module.exports = {
  getByNameOrZip
};