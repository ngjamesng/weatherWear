import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import cToF from "../utils/tempConversion";

import SubmissionForm from "./SubmissionForm";
import Result from "../Result";



function WeatherForm() {
  const [resultData, setResultData] = useState(null);

  const [coordinates, setCoordinates] = useState(null);
  const tempPreference = useSelector(store => store.temperaturePreference),
    displayTemp = (measurement, reading) => {
      return measurement === "celsius" ? reading.toFixed(1) : cToF(reading).toFixed(1);
    },
    displayMeasurement = measurement => measurement === "celsius" ? "C" : "F";

  const getLocationAndSubmit = () => {
    navigator.geolocation.getCurrentPosition((p) => {
      const { latitude, longitude } = p.coords;
      setCoordinates({ lat: latitude, lon: longitude });
    })
  }

  return (
    <Container>
      <div className="py-3 text-center">
        <p className="lead">
          Fill out the information below and get your clothing recommendation.
        </p>
      </div>
      <SubmissionForm
        setResultData={setResultData}
        getLocationAndSubmit={getLocationAndSubmit}
        coordinates={coordinates}
      />
      {coordinates && `${coordinates.lat} ${coordinates.lon}`}
      {/* {`${latitude} ${longitude}`} */}
      {resultData && <Result resultData={resultData}
        tempPreference={tempPreference}
        displayTemp={displayTemp}
        displayMeasurement={displayMeasurement}
      />}
    </Container>
  )
}

export default WeatherForm;