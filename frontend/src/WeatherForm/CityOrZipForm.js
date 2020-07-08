import React, { useState } from "react";
import { Form, Button, Col, InputGroup, Accordion } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";

const INITIAL_STATE = {
  cityOrZip: ""
}

function CityOrZipForm({ setResultData, isLoading, setIsLoading, setErrors, formIsActive }) {

  //handle form data and submission
  const [formData, setFormData] = useState(INITIAL_STATE),
    handleFormChange = evt => {
      const { name, value } = evt.target;
      setFormData(fData => ({
        ...fData,
        [name]: value,
      }));
    };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setIsLoading(true);
      let response = await WeatherWearAPI.submitByCityOrZip(formData);
      if (formIsActive.current) {
        setResultData(response);
        setErrors(null);
      }
    } catch (err) {
      if (formIsActive.current) {
        setResultData(null);
        setErrors(err);
      }
    } finally {
      formIsActive.current && setIsLoading(false);
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Col}>
        <Form.Label>... or alternatively, enter a city or ZIP code. </Form.Label>
        <Form.Text className="text-muted">
          Searching by city or zip will save your results to the database. 
        </Form.Text>
        <InputGroup>
          <Form.Control
            type="text"
            name="cityOrZip"
            placeholder="Enter a city or ZIP code."
            onChange={handleFormChange}
            required={true}
            disabled={isLoading}
          />

        </InputGroup>
      </Form.Group>
      <Form.Group as={Col}>

        <Accordion.Toggle
          as={Button}
          type="submit"
          disabled={isLoading || formData.cityOrZip.length === 0}
          eventKey={0}
        >
          Get!
      </Accordion.Toggle>
      </Form.Group>

    </Form>
  )
}

export default CityOrZipForm;