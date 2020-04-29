import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
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
  const handlePreferenceChange = evt => {
    // const { name, value } = evt.target;
    //Set redux settings here!
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let response = await WeatherWearAPI.submitQuery(formData);
    console.log("RESPONSE!", response)
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
      <Form.Group as={Row}>
        <Col sm={6}>
          <Form.Label as="legend">Temperature Preference</Form.Label>
          <Form.Text className="text-muted">You can change your temperature preference in settings.</Form.Text>
          <Form.Check
            type="radio"
            label="Celsius"
            name="temperaturePreference"
            value="celsius"
            onChange={handlePreferenceChange}

          />
          <Form.Check
            type="radio"
            label="Fahrenheit"
            name="temperaturePreference"
            value="fahrenheit"
            onChange={handlePreferenceChange}
          />
        </Col>
        <Col sm={6}>
          <Form.Label as="legend">Activity Level</Form.Label>
          <Form.Text className="text-muted">
            You can change your preference in settings.
            Select "Low activity" if you plan on standing/sitting/walking outside.
            Select "High activity" if you plan on exercising/running/jogging outside.
              </Form.Text>
          <Form.Check
            type="radio"
            label="Low activity"
            value="low"
            name="activityPreference"
            onChange={handlePreferenceChange}
          />
          <Form.Check
            type="radio"
            label="High activity"
            value="high"
            name="activityPreference"
            onChange={handlePreferenceChange}

          />
        </Col>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
)
}

export default WeatherForm;