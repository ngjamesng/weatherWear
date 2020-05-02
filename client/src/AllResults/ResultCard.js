import React from "react";
import { Link } from "react-router-dom";
import { Media } from "react-bootstrap";
import moment from "moment";
const METAWEATHER_IMG_URL = abbr => `https://www.metaweather.com/static/img/weather/${abbr}.svg`;

function ResultCard({ data }) {
  return (
    <Media>
      <img
        width={32}
        height={32}
        className="mr-3"
        src={METAWEATHER_IMG_URL(data.weather_state_abbr)}
        alt={data.weather_state_name}
      />
      <Media.Body>
        <Link to={`results/${data.id}`}>
          <h5>{moment(data.applicable_date).format("LL")} in {data.city_name} </h5>
        </Link>
        <p>Temperature: {data.the_temp} degrees {"Celsius"} |
          Wind speed: {data.wind_speed} mph | {" "}
          {data.weather_state_name}
        </p>
      </Media.Body>
    </Media>)
}

export default ResultCard;