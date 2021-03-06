import React, { useState } from "react";
import { Form, Button, Col, InputGroup, Accordion } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";

function CoordinateForm({ setResultData, isLoading, setIsLoading, setErrors, _formIsActive }) {
  const [coordinates, setCoordinates] = useState(null);

  const getLocationAndSubmit = async () => {
    _formIsActive.current && setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (p) => {
      try {
        const { latitude: lat, longitude: lon } = p.coords;
        let response = await WeatherWearAPI.submitByCoordinates({ lat, lon });
        if(_formIsActive.current){
          setResultData(response);
          setCoordinates({ lat, lon });
          setErrors(null);
        }
      } catch (err) {
        if (_formIsActive.current) {
          setResultData(null);
          setErrors(err);
          setIsLoading(false);
        }
      } 
      finally {
        if(_formIsActive.current) setIsLoading(false);
      }
    })
  }

  return (
    <Form>
      <Form.Group as={Col}>

        <Form.Label>Automatically get location</Form.Label>
        <Form.Text className="text-muted">
          Your coordinates or results will NOT be saved to the database if you automatically get location.
        </Form.Text>
        <InputGroup>
          <Form.Control
            type="text"
            name="coordinates"
            value={coordinates ? `${coordinates.lat.toFixed(2)}, ${coordinates.lon.toFixed(2)}` : ""}
            placeholder={"your coordinates will show here. "}
            readOnly
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
          Get by coordinates!
      </Accordion.Toggle>
      </Form.Group>
    </Form>
  )
}

export default CoordinateForm;