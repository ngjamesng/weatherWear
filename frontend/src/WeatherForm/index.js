import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Col, Accordion, Button } from "react-bootstrap";

import CityOrZipForm from "./CityOrZipForm";
import CoordinateForm from "./CoordinateForm";
import Preferences from "../Preferences";
import Result from "../Result";
import ErrorToast from "../ErrorToast";

function WeatherForm() {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const _formIsActive = useRef(true);

  useEffect(() => {
    return () => {
      _formIsActive.current = false;
    }
  }, []);

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
                _formIsActive={_formIsActive}
              />
              <CityOrZipForm
                setResultData={setResultData}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setErrors={setErrors}
                _formIsActive={_formIsActive}
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
      {errors?.map((e, idx) =>
        <ErrorToast
          key={`${e}-${idx}`}
          message={e}
          errors={errors}
          setErrors={setErrors}
          errorId={idx}
        />
      )}
    </Container>
  )
}

export default WeatherForm;