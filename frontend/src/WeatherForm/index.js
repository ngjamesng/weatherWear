import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { Container, Card, Col, Accordion, Button, Alert, Toast } from "react-bootstrap";

import CityOrZipForm from "./CityOrZipForm";
import CoordinateForm from "./CoordinateForm";
import Preferences from "../Preferences";
import Result from "../Result";

function WeatherForm() {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const formIsActive = useRef(true);

  useEffect(() => {
    return () => {
      formIsActive.current = false;
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
                formIsActive={formIsActive}
              />
              <CityOrZipForm
                setResultData={setResultData}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setErrors={setErrors}
                formIsActive={formIsActive}
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
        <Toast
          style={{ position: 'absolute', bottom: 20, right: 20, }}
          key={`${e}-${idx}`}
          onClose={() => setErrors(errors.filter((err, i) => i !== idx))}
        >
          <Toast.Header>
            <strong className="mr-auto">error </strong>
            <small>{moment().fromNow()}.</small>
          </Toast.Header>
          <Toast.Body>
            <Alert variant="warning">{e}</Alert>
          </Toast.Body>
        </Toast>)}
    </Container>
  )
}

export default WeatherForm;