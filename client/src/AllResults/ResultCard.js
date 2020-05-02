import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Media, Card } from "react-bootstrap";
import moment from "moment";
import cToF from "../utils/tempConversion";

const METAWEATHER_IMG_URL = abbr => `https://www.metaweather.com/static/img/weather/${abbr}.svg`;

function ResultCard({ data, tempPreference }) {
  const displayTemp = (measurement, reading) => {
    return measurement === "celsius"
      ? reading : cToF(reading);
  }
  const displayMeasurement = measurement => measurement === "celsius" ? "C" : "F";
  return (
    <Card className="mt-2">
      <Card.Body>
        <Media>
          <img
            width={32}
            height={32}
            className="mr-3"
            src={METAWEATHER_IMG_URL(data.weather_state_abbr)}
            alt={data.weather_state_name}
          />
          <Media.Body>
            <h5>
              <Link to={`results/${data.id}`}>
                {moment(data.applicable_date).format("LL")} in {data.city_name}
              </Link>
            </h5>
            <p>Temperature: {displayTemp(tempPreference, data.the_temp)} degrees {displayMeasurement(tempPreference)} |
          Wind speed: {data.wind_speed} mph | {" "}
              {data.weather_state_name}
            </p>
          </Media.Body>
        </Media>
      </Card.Body>
    </Card>
  )
}

export default ResultCard;