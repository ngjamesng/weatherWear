import React from "react";
import { Media, Container } from "react-bootstrap";
import moment from "moment";

import Recommendation from "./Recommendation";
const OPEN_WEATHER_IMG_URL = code => `http://openweathermap.org/img/wn/${code}@2x.png`;

function Result({ resultData: data, tempPreference, displayTemp, displayMeasurement }) {

  return (
    <Container className="mt-5">
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={OPEN_WEATHER_IMG_URL(data.weather[0].icon)}
          alt={data.weather[0].description}
        />
        <Media.Body>
          <h5>The weather in {data.name}</h5>
          <p>
            Here's the weather on {moment.unix(data.dt + data.timezone).utc().format("LLL")}. <br />
            temperature: {displayTemp(tempPreference, data.main.temp)}° {displayMeasurement(tempPreference)}. <br />
            wind speed: {(data.wind.speed * 2.23694).toFixed(1)} mph.<br />
            conditions: {data.weather[0].description}.<br />
          </p>
        </Media.Body>
      </Media>
      <Recommendation data={data} />
    </Container>
  )
}

export default Result;