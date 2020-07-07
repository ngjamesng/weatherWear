import React from "react";
import { Link } from "react-router-dom";
import { Media, Card } from "react-bootstrap";
import moment from "moment";
import cToF from "../utils/tempConversion";
import OPEN_WEATHER_IMG_URL from "../utils/ImgUrl";


const METAWEATHER_IMG_URL = abbr => `https://www.metaweather.com/static/img/weather/${abbr}.svg`;

function ResultCard({ data, tempPreference }) {
  const displayTemp = (measurement, reading) => {
    return measurement === "celsius"
      ? reading.toFixed(1) : cToF(reading).toFixed(1);
  }

  return (
    <Card className="mt-2">
      <Card.Body>
        <Media>
          <img
            width={32}
            height={32}
            className="mr-3"
            src={OPEN_WEATHER_IMG_URL(data.weather[0].icon)}
            alt={data.weather[0].description}
          />
          <Media.Body>
            <h5>
              <Link to={`results/${data.id}`}>
                {moment.unix(data?.dt + data?.timezone).utc().format("LL")} in {data.name}
              </Link>
            </h5>
            <p>Temperature: {(data?.main.temp) && displayTemp(tempPreference, data?.main.temp)}° {tempPreference === "celsius" ? "C" : "F"} |
              Wind: {(data?.wind.speed * 2.23694).toFixed(1)} mph | {" "}
              {data?.weather[0].description}
            </p>
          </Media.Body>
        </Media>
      </Card.Body>
    </Card>
  )
}

export default ResultCard;