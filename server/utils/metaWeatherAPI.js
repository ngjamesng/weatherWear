const axios = require('axios');
const BASE_URL = 'https://www.metaweather.com/api/';

async function getLocationWOEID(name) {
  try {
    let resp = await axios.get(`${BASE_URL}location/search/?query=${name}`);
    return resp.data[0];
  } catch (err) {
    console.error("error:", err);
  }

}

module.exports = {
  getLocationWOEID
};