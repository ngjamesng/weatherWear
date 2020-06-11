import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import cToF from "../utils/tempConversion";

import SubmissionForm from "./SubmissionForm";
import Result from "../Result";



function WeatherForm() {
  const [resultData, setResultData] = useState(null);

  const [coordinates, setCoordinates] = useState({ latitude: undefined, longitude: undefined });
  const tempPreference = useSelector(store => store.temperaturePreference),
    displayTemp = (measurement, reading) => {
      return measurement === "celsius" ? reading.toFixed(1) : cToF(reading).toFixed(1);
    },
    displayMeasurement = measurement => measurement === "celsius" ? "C" : "F";

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((p) => {
      const { latitude, longitude } = p.coords;
      setCoordinates({latitude, longitude});
    })
  }

  return (
    <Container>
      <div className="py-3 text-center">
        <p className="lead">
          Fill out the information below and get your clothing recommendation.
        </p>
      </div>
      <SubmissionForm setResultData={setResultData} />
      <Button onClick={getLocation}> get Location </Button>
      {coordinates.longitude && coordinates.latitude && `${coordinates.latitude} ${coordinates.longitude}`}
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