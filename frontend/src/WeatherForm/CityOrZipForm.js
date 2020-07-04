import React, { useState } from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";

const INITIAL_STATE = {
  cityOrZip: ""
}

function CityOrZipForm({ setResultData, isLoading, setIsLoading }) {

  //handle form data and submission
  const [formData, setFormData] = useState(INITIAL_STATE),
    handleFormChange = evt => {
      const { name, value } = evt.target;
      setFormData(fData => ({
        ...fData,
        [name]: value,
      }));
    },
    handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
        setIsLoading(true);
        let response = await WeatherWearAPI.submitByCityOrZip(formData);
        console.log("RESPONSE!!!!", response);
        setResultData(response);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Col}>
        <Form.Label>... or Manually enter a location</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            name="cityOrZip"
            placeholder="Enter a city or ZIP code..."
            onChange={handleFormChange}
            required={true}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col}>

      <Button type="submit" disabled={isLoading}>Get by City or Zip</Button> {" "}
      </Form.Group>

    </Form>
  )
}

export default CityOrZipForm;