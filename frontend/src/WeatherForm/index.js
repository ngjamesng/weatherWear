import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import SubmissionForm from "./SubmissionForm";

import Preferences from "../Preferences";
import Result from "../Result";

const INITIAL_STATE = {
  cityOrZip: ""
}
function WeatherForm() {

  const [resultData, setResultData] = useState(null);



  return (
    <Container>
      <div className="py-3 text-center">
        <p className="lead">
          Fill out the information below and get your clothing recommendation.
        </p>
      </div>
      <SubmissionForm setResultData={setResultData}/>
      {resultData && Result(resultData)}
    </Container>
  )
}

export default WeatherForm;