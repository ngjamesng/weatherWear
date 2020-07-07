import React, { useState } from "react";
import { Form, Button, Col, InputGroup, Accordion } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";

function CoordinateForm({ setResultData, isLoading, setIsLoading, setErrors, formIsActive }) {
  const [coordinates, setCoordinates] = useState(null);

  const getLocationAndSubmit = async () => {
    formIsActive.current && setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (p) => {
      try {
        const { latitude: lat, longitude: lon } = p.coords;
        let response = await WeatherWearAPI.submitByCoordinates({ lat, lon });
        if(formIsActive.current){
          setResultData(response);
          setCoordinates({ lat, lon });
          setErrors(null);
        }
      } catch (err) {
        if (formIsActive.current) {
          setResultData(null);
          setErrors(err);
          setIsLoading(false);
        }
      } 
      finally {
        if(formIsActive.current) setIsLoading(false);
      }
    })
  }

  return (
    <Form>
      <Form.Group as={Col}>

        <Form.Label>Automatically get location</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            name="coordinates"
            value={coordinates ? `${coordinates.lat.toFixed(2)}, ${coordinates.lon.toFixed(2)}` : ""}
            placeholder={"your coordinates will show here. "}
            disabled
          />
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col}>
        <Accordion.Toggle
          as={Button}
          onClick={getLocationAndSubmit}
          disabled={isLoading}
          eventKey={0}
        >
          Get!
      </Accordion.Toggle>
      </Form.Group>
    </Form>
  )
}

export default CoordinateForm;