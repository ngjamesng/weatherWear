import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

function WeatherForm() {

  return (
    <Container>
      <div className="py-3 text-center">
        <h2>WeatherWear</h2>
        <p className="lead">
          Fill out the information below and get your clothing recommendation. 
        </p>
      </div>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="San Francisco" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form.Row>
        <Form.Group as={Row}>
          <Col sm={6}>
            <Form.Label as="legend">Temperature Preference</Form.Label>
            <Form.Text className="text-muted">You can change your temperature preference later in settings.</Form.Text>
            <Form.Check
              type="radio"
              label="Celsius"
              name="temperaturePreference"
            />
            <Form.Check
              type="radio"
              label="Fahrenheit"
              name="temperaturePreference"
            />
          </Col>
          <Col sm={6}>
            <Form.Label as="legend">Activity Level</Form.Label>
            <Form.Text className="text-muted">
              You can change your preference later in settings.
              Select "Low activity" if you plan on standing/sitting/walking outside.
              Select "High activity" if you plan on exercising/running/jogging outside.
              </Form.Text>
            <Form.Check
              type="radio"
              label="Low activity"
              name="activityPreference"
            />
            <Form.Check
              type="radio"
              label="High activity"
              name="activityPreference"
            />
          </Col>
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </Container>
  )
}

export default WeatherForm;