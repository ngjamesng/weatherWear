import React from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
function Preferences() {
  //use redux here to set global preferences
  const handlePreferenceChange = evt => {
    // const { name, value } = evt.target;
    console.log("CHANGED!", evt.target.name, evt.target.value)
    //Set redux settings here!
  }
  return (
    <Container>
      <h1>preferences page</h1>
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
    </Container>
  )
}

export default Preferences;