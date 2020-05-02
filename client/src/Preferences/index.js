import React from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  changeToFahrenheit,
  changeToCelsius,
  changeToLowActivity,
  changeToHighActivity,
} from "./actions"

function Preferences() {
  const tempPreference = useSelector(store => store.temperaturePreference);
  const activityLevel = useSelector(store => store.activityLevel);
  const dispatch = useDispatch();
  //use redux here to set global preferences
  const handleTemperatureChange = evt => {
    const { value } = evt.target;
    value === "fahrenheit"
      ? dispatch(changeToFahrenheit())
      : dispatch(changeToCelsius())
  }

  const handleActivityLevelChange = evt => {
    const { name, value } = evt.target;
    console.log("CHANGED!", evt.target.name, evt.target.value)
    value === "high"
      ? dispatch(changeToHighActivity())
      : dispatch(changeToLowActivity())
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
            onChange={handleTemperatureChange}
            checked={tempPreference === "celsius"}
          />
          <Form.Check
            type="radio"
            label="Fahrenheit"
            name="temperaturePreference"
            value="fahrenheit"
            onChange={handleTemperatureChange}
            checked={tempPreference === "fahrenheit"}
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
            onChange={handleActivityLevelChange}
            checked={activityLevel === "low"}
          />
          <Form.Check
            type="radio"
            label="High activity"
            value="high"
            name="activityPreference"
            onChange={handleActivityLevelChange}
            checked={activityLevel === "high"}

          />
        </Col>
      </Form.Group>
    </Container>
  )
}

export default Preferences;