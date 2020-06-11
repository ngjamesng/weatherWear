import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import Preferences from "../Preferences";

const INITIAL_STATE = {
  cityOrZip: ""
}

function SubmissionForm({ setResultData }) {
  
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
      let response = await WeatherWearAPI.submitQuery(formData);
      setResultData(response);
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="cityOrZip"
            placeholder="Enter a city or ZIP code..."
            onChange={handleFormChange}
            required
          />
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit</Button> {" "}
      <Preferences type={"WeatherForm"} /> 
    </Form>
  )
}

export default SubmissionForm;