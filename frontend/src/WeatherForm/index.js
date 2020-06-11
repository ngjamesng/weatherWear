import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import Preferences from "../Preferences";
import Result from "../Result";

const INITIAL_STATE = {
  cityOrZip: ""
}
function WeatherForm() {
  const [formData, setFormData] = useState(INITIAL_STATE),
    handleFormChange = evt => {
      const { name, value } = evt.target;
      console.log(name, value)
      setFormData(fData => ({
        ...fData,
        [name]: value,
      }));
    }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let response = await WeatherWearAPI.submitQuery(formData);
    console.log(response);
    // history.push(`/results/${response.id}`);
  }

  return (
    <Container>
      <div className="py-3 text-center">
        <p className="lead">
          Fill out the information below and get your clothing recommendation.
        </p>
      </div>
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
        <Preferences type={"WeatherForm"} /> {" "}
        <Button type="submit">Submit</Button>
      </Form>

    </Container>
  )
}

export default WeatherForm;