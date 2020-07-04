import React, { useState } from "react";
import { Container, Card, Col } from "react-bootstrap";


import CityOrZipForm from "./CityOrZipForm";
import CoordinateForm from "./CoordinateForm";
import Preferences from "../Preferences";
import Result from "../Result";
import SkeletonResult from "./SkeletonResult";


function WeatherForm() {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);




  return (
    <Container>
      <div className="py-3 text-center">
        <p className="lead">
          Fill out the information below and get your clothing recommendation.
          WeatherWear can automatically get your location, or you can enter a city or zip code.
        </p>
      </div>
      <Card>
        <Card.Body>
          <CoordinateForm
            setResultData={setResultData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <CityOrZipForm
            setResultData={setResultData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <Col>
            <Preferences type={"WeatherForm"} />
          </Col>
        </Card.Body>
      </Card>
      {(resultData || isLoading) &&
        <Result resultData={resultData} isLoading={isLoading} />}
    </Container>
  )
}

export default WeatherForm;