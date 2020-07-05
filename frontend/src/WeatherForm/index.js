import React, { useState, useEffect } from "react";
import { Container, Card, Col, Accordion, Button, Alert } from "react-bootstrap";


import CityOrZipForm from "./CityOrZipForm";
import CoordinateForm from "./CoordinateForm";
import Preferences from "../Preferences";
import Result from "../Result";

function WeatherForm() {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    setErrors(false);
  }, [resultData]);

  return (
    <Container>
      <div className="py-3 text-center">
        <p className="lead">
          WeatherWear can automatically get your location, or you can enter a city or zip code.
        </p>
      </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Your Location
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <CoordinateForm
                setResultData={setResultData}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setErrors={setErrors}
              />
              <CityOrZipForm
                setResultData={setResultData}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setErrors={setErrors}
              />
              <Col>
                <Preferences type={"WeatherForm"} />
              </Col>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      {(resultData || isLoading) &&
        <Card>
          <Card.Body>

            <Result resultData={resultData} isLoading={isLoading} />
          </Card.Body>
        </Card>
      }
      {errors.length &&
        errors.map((e, idx) =>
          <Alert
            onClose={() => setErrors(false)}
            key={`${e}-${idx}`}
            variant={"warning"}
            dismissible>{e}
          </Alert>)
      }
    </Container>
  )
}

export default WeatherForm;