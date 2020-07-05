import React, { useState } from "react";
import { Form, Button, Col, InputGroup, Accordion } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";

function CoordinateForm({ setResultData, isLoading, setIsLoading }) {
  const [coordinates, setCoordinates] = useState(null);

  const getLocationAndSubmit = () => {
    try {
      setIsLoading(true);
      const handleSubmit = async (coordinates) => {
        let response = await WeatherWearAPI.SubmitByCoordinates(coordinates);
        setResultData(response);
        setIsLoading(false);
      }
      navigator.geolocation.getCurrentPosition((p) => {
        const { latitude: lat, longitude: lon } = p.coords;
        setCoordinates({ lat, lon });
        handleSubmit({ lat, lon });
      })

    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
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