import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

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

  static async getResults(data) {
    let res = await this.request(`results`, data);
    return res.data;
  }
  static async getResult(id) {
    let res = await this.request(`results/${id}`);
    return res.data;
  }
}
export default WeatherWearAPI;