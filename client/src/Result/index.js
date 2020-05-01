import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherWearAPI from "../utils/WeatherWearAPI";

// {"id":2,"woeid":2487956,
// "city_name":"San Francisco",
// "location_type":"City",
// "applicable_date":"2020-04-20T07:00:00.000Z",
// "the_temp":16,
// "wind_speed":9,
// "weather_state_name":"Light Cloud"
// }
function Result() {
  const { id } = useParams();
  const [resultData, setResultData] = useState({});
  useEffect(() => {
    async function getResultFromAPI(){
      let res = await WeatherWearAPI.getResult(id);
      setResultData(res);
    }
    getResultFromAPI();
  }, []);
  return (
    <h1>
      {JSON.stringify(resultData)}
      SINGLE past results here!
    </h1>
  )
}

export default Result;