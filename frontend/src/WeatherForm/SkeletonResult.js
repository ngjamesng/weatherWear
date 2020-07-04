import React from "react";
import { Container, Media } from "react-bootstrap"
import Skeleton from "react-loading-skeleton";

function SkeletonResult() {
  return (
    <Container className="mt-5">
      <Media>
        {/* <img> */}
        <Skeleton className={"mr-3"} height={64} width={64} circle />
        {/* </img> */}
        <Media.Body>
          <h5>The weather in {<Skeleton />}</h5>
          <p>
            {/* Here's the weather on {moment.unix(data.dt + data.timezone).utc().format("LLL")}. <br />
            temperature: {displayTemp(tempPreference, data.main.temp)}° {displayMeasurement(tempPreference)}. <br />
            wind speed: {(data.wind.speed * 2.23694).toFixed(1)} mph.<br />
            conditions: {data.weather[0].description}.<br />
            cloudiness: {data.clouds.all}% <br />
            {data.rain && `rain volume for the last hour: ${data.rain["1h"]} mm ${<br />}`}
            {data.snow && `snow volume for the last hour: ${data.snow["1h"]} mm ${<br />}`}
            humidity: {data.main.humidity}% */}
          </p>
        </Media.Body>
      </Media>
      {/* <Recommendation data={data} /> */}
    </Container>
  )
}

export default SkeletonResult;