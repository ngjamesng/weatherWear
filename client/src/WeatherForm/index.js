import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import WeatherWearAPI from "../utils/WeatherWearAPI";
import moment from "moment";
const INITIAL_STATE = {
  location: "",
  date: `${moment().format("L")}`
}
function WeatherForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleFormChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let response = await WeatherWearAPI.submitQuery(formData);
    console.log("RESPONSE!", response);
  }

  return (
    <Container>
      <div className="py-3 text-center">
        <h2>WeatherWear</h2>
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
              name="location"
              placeholder="San Francisco"
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={handleFormChange}
            />
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default WeatherForm;