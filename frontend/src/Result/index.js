import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import { Media, Container } from "react-bootstrap";
import moment from "moment";

import Recomendation from "./Recommendation";
const OPEN_WEATHER_IMG_URL = code => `http://openweathermap.org/img/wn/${code}@2x.png`;

function Result({ resultData, tempPreference, displayTemp, displayMeasurement }) {

  return (
    <Container className="mt-5">
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={OPEN_WEATHER_IMG_URL(resultData.weather[0].icon)}
          alt={resultData.weather[0].description}
        />
        <Media.Body>
          <h5>The weather in {resultData.name}</h5>
          <p>
            Here's the weather on {moment.unix(resultData.dt + resultData.timezone).utc().format("LLL")}. <br />
            temperature: {displayTemp(tempPreference, resultData.main.temp)}° {displayMeasurement(tempPreference)}. <br />
            wind speed: {(resultData.wind.speed * 2.23694).toFixed(1)} mph.<br />
            The weather has a {resultData.weather[0].description}.<br />
          </p>
        </Media.Body>
      </Media>
      {/* <Recomendation data={data}/> */}
    </Container>
  )
}

export default Result;