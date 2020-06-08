const axios = require('axios');
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

async function getByNameOrZip({ city, zip }) {
  const key = process.env.OPEN_WEATHER_API_KEY;
  try {
    const cityOrZip = city ? { q: city } : { zip: zip };
    let resp = await axios.get(`${BASE_URL}weather`, {
      params:
      {
        ...cityOrZip,
        units: "metric",
        appid: key
      }
    });
    return resp.data;
  } catch (err) {
    console.error("error:", err);
  }
}

async function getByCoordinates({ lon, lat }) {
  const key = process.env.OPEN_WEATHER_API_KEY;
  try {
    let resp = await axios.get(`${BASE_URL}weather`, {
      params: {
        lon,
        lat,
        units: "metric",
        appid: key
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