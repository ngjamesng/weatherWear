import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001/";

class WeatherWearAPI {
  static async request(endpoint, params = {}, verb = "get") {

    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(
        `${BASE_URL}${endpoint}`, { params: { ...params } });
    } else if (verb === "post") {
      q = axios.post(
        `${BASE_URL}${endpoint}`, { ...params });
    } else if (verb === "patch") {
      q = axios.patch(
        `${BASE_URL}${endpoint}`, { ...params });
    }

    try {
      return (await q).data;
    } catch (err) {
      // console.error("API Error:", err);
      // let message = err.response?.data.message;
      // console.log(err.message)
      let message = err.response?.data.message || err.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  /**get a list of past queries */
  static async getResults() {
    let res = await this.request(`weather`);
    return res;
  }
  /**get a single past weather query */
  static async getResult(id) {
    let res = await this.request(`weather/${id}`);
    return res;
  }

  /**submit a query of location and date */
  static async submitByCityOrZip({ cityOrZip }) {

    let data = +cityOrZip <= 99999
      ? { zip: `${cityOrZip},us` }
      : { city: cityOrZip };
    let res = await this.request(`weather`, data, "post");
    return res;
  }

  static async submitByCoordinates({ lat, lon }) {
    let res = await this.request(`weather/coordinates`, { lat, lon }, "get");
    return res;
  }

}
export default WeatherWearAPI;