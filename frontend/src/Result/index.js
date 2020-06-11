import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import { Media, Container } from "react-bootstrap";
import moment from "moment";
import { useSelector } from "react-redux";
import cToF from "../utils/tempConversion";
import Reccomendation from "./Recommendation";
const OPEN_WEATHER_IMG_URL = code => `http://openweathermap.org/img/wn/${code}@2x.png`;

// {
//   "coord": {
//     "lon": -122.41,
//     "lat": 37.8
//   },
//   "weather": [
//     {
//       "id": 801,
//       "main": "Clouds",
//       "description": "few clouds",
//       "icon": "02d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 20.29,
//     "feels_like": 16.52,
//     "temp_min": 16.67,
//     "temp_max": 25.56,
//     "pressure": 1019,
//     "humidity": 44
//   },
//   "visibility": 16093,
//   "wind": {
//     "speed": 4.6,
//     "deg": 280
//   },
//   "clouds": {
//     "all": 20
//   },
//   "dt": 1591753854,
//   "sys": {
//     "type": 1,
//     "id": 5154,
//     "country": "US",
//     "sunrise": 1591706844,
//     "sunset": 1591759852
//   },
//   "timezone": -25200,
//   "id": 0,
//   "name": "San Francisco",
//   "cod": 200
// }
function Result(data) {
  console.log(data)
  // const tempPreference = useSelector(store => store.temperaturePreference),
  //   displayTemp = (measurement, reading) => {
  //     return measurement === "celsius" ? reading : cToF(reading);
  //   },
  //   displayMeasurement = measurement => measurement === "celsius" ? "C" : "F";

  return (
    <Container className="mt-5">
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={OPEN_WEATHER_IMG_URL(data.weather[0].icon)}
          // alt={data.weather_state_name}
        />
        <Media.Body>
          <h5>The weather in {data.name}</h5>
          {/* <p>
            Here's the weather on {moment(data.applicable_date).format("LL")}. <br />
            temperature: {displayTemp(tempPreference, data.the_temp)}° {displayMeasurement(tempPreference)}. <br />
            wind speed: {data.wind_speed} mph.<br />
            The State of the weather: {data.weather_state_name}.<br />
          </p> */}
        </Media.Body>
      </Media>
      {/* <Reccomendation data={data}/> */}
    </Container>
  )
}

export default Result;