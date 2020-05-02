import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import { Media, Container } from "react-bootstrap";
import moment from "moment";
import { useSelector } from "react-redux";
import cToF from "../utils/tempConversion";


const METAWEATHER_IMG_URL = abbr => `https://www.metaweather.com/static/img/weather/${abbr}.svg`;

// {"id":2,"woeid":2487956,
// "city_name":"San Francisco",
// "location_type":"City",
// "applicable_date":"2020-04-20T07:00:00.000Z",
// "the_temp":16,
// "wind_speed":9,
// "weather_state_name":"Light Cloud"
//weather_state_abbr: "c"
// }
function Result() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const tempPreference = useSelector(store => store.temperaturePreference);

  const displayTemp = (measurement, reading) => {
    return measurement === "celsius"
      ? reading : cToF(reading);
  }
  const displayMeasurement = measurement => measurement === "celsius" ? "C" : "F";

  useEffect(() => {
    async function getResultFromAPI() {
      let res = await WeatherWearAPI.getResult(id);
      setData(res);
      // console.log("RESULT DATA!", res)
    }
    getResultFromAPI();
  }, [id]);
  return (
    <Container className="mt-5">
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={METAWEATHER_IMG_URL(data.weather_state_abbr)}
          alt={data.weather_state_name}
        />
        <Media.Body>
          <h5>The weather in the {data.location_type} of {data.city_name}</h5>
          <p>
            Here's the weather on {moment(data.applicable_date).format("LL")}. <br />
            temperature: {displayTemp(tempPreference, data.the_temp)} degrees {displayMeasurement(tempPreference)}. <br />
            wind speed: {data.wind_speed} mph.<br />
            The State of the weather: {data.weather_state_name}.<br />
          </p>
        </Media.Body>
      </Media>

    </Container>
  )
}

export default Result;