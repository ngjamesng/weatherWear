import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { useSelector } from "react-redux";
import cToF from "../utils/tempConversion";

import SubmissionForm from "./SubmissionForm";
import Result from "../Result";

function WeatherForm() {

  const [resultData, setResultData] = useState(null);
  const tempPreference = useSelector(store => store.temperaturePreference),
    displayTemp = (measurement, reading) => {
      return measurement === "celsius" ? reading.toFixed(1) : cToF(reading).toFixed(1);
    },
    displayMeasurement = measurement => measurement === "celsius" ? "C" : "F";


  return (
    <Container>
      <div className="py-3 text-center">
        <p className="lead">
          Fill out the information below and get your clothing recommendation.
        </p>
      </div>
      <SubmissionForm setResultData={setResultData} />
      {resultData && Result({ resultData, tempPreference, displayTemp, displayMeasurement })}
    </Container>
  )
}

export default WeatherForm;