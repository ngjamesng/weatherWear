const axios = require('axios');
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const { OPEN_WEATHER_API_KEY } = require("../config");

async function getByNameOrZip({ city, zip }) {
  try {
    const cityOrZip = city ? { q: city } : { zip: zip };
    let resp = await axios.get(`${BASE_URL}weather`, {
      params:
      {
        ...cityOrZip,
        units: "metric",
        appid: OPEN_WEATHER_API_KEY
      }
    });
    return resp.data;
  } catch (err) {
    console.error("error:", err);
  }
}

async function getByCoordinates({ lon, lat }) {
  try {
    let resp = await axios.get(`${BASE_URL}weather`, {
      params: {
        lon,
        lat,
        units: "metric",
        appid: OPEN_WEATHER_API_KEY
      }
    })
    return resp.data
  } catch (err) {
    console.error("error:", err);
  }
}

module.exports = {
  getByNameOrZip,
  getByCoordinates
};