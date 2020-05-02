import React from "react";
import { Link } from "react-router-dom";
import { Media, Card } from "react-bootstrap";
import moment from "moment";
const METAWEATHER_IMG_URL = abbr => `https://www.metaweather.com/static/img/weather/${abbr}.svg`;

function ResultCard({ data }) {
  return (
    <Card>
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
          <p>Temperature: {data.the_temp} degrees {"Celsius"} |
          Wind speed: {data.wind_speed} mph | {" "}
            {data.weather_state_name}
          </p>
        </Media.Body>
      </Media>
    </Card>
  )
}

export default ResultCard;