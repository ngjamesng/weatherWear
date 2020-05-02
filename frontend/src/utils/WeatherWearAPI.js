import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

class WeatherWearAPI {
  static async request(endpoint, params = {}, verb = "get") {

    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(
        `${BASE_URL}/${endpoint}`, { params: { ...params } });
    } else if (verb === "post") {
      q = axios.post(
        `${BASE_URL}/${endpoint}`, { ...params });
    } else if (verb === "patch") {
      q = axios.patch(
        `${BASE_URL}/${endpoint}`, { ...params });
    }

    try {
      return (await q).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
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
  static async submitQuery(data) {
    let res = await this.request(`weather`, data, "post" );
    // console.log("DATA!", data);
    // console.log("Data from server call: ", res.data);
    return res;
  }
}
export default WeatherWearAPI;