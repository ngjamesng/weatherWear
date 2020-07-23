import React from "react";
import { Media, Container } from "react-bootstrap";
import moment from "moment";

import { useSelector } from "react-redux";
import cToF from "../utils/tempConversion";
import OPEN_WEATHER_IMG_URL from "../utils/ImgUrl";

import Recommendation from "./Recommendation";
import Skeleton from "react-loading-skeleton";

function Result({ resultData: data, isLoading }) {

  const tempPreference = useSelector(store => store.temperaturePreference),
    displayTemp = (measurement, reading) => {
      return measurement === "celsius" ? reading.toFixed(1) : cToF(reading).toFixed(1);
    },
    displayMeasurement = measurement => measurement === "celsius" ? "C" : "F";

  return (
    <Container className="mt-5">
      <Media>
        {!data || isLoading
          ? <>
            <Skeleton height={64} width={64} circle />
            <Media.Body>
              <Skeleton height={30} />
              <Skeleton count={4} />
            </Media.Body>
          </>
          :
          <>
            <img width={64} height={64} className="mr-3"
              src={OPEN_WEATHER_IMG_URL(data.weather[0].icon)}
              alt={data.weather[0].description}
            />
            <Media.Body>
              <h5>The weather in {data?.name}</h5>
              <p>
                Here's the weather on {moment.unix(data?.dt + data?.timezone).utc().format("LLL")}. <br />
            temperature: {(data?.main.temp) && displayTemp(tempPreference, data?.main.temp)}° {displayMeasurement(tempPreference)}. <br />
            wind speed: {(data?.wind.speed * 2.23694).toFixed(1)} mph.<br />
            conditions: {data?.weather[0].description}.<br />
            cloudiness: {data?.clouds.all}% <br />
                {data?.rain && `rain volume for the last hour: ${data?.rain["1h"]} mm` && <br />}
                {data?.snow && `snow volume for the last hour: ${data?.snow["1h"]} mm` && <br />}
            humidity: {data?.main.humidity}%
          </p>
            </Media.Body>
          </>
        }
      </Media>
      {data && !isLoading && <Recommendation data={data} />}
    </Container>
  )
}

export default Result;