import React, { useState } from "react";
import { Form, Col, Row, Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Nav } from "react-bootstrap";
import {
  changeToFahrenheit,
  changeToCelsius,
  changeToLowActivity,
  changeToHighActivity,
} from "./actions"

function Preferences({ type }) {
  // functions for showing/hiding modal
  const [show, setShow] = useState(false),
    handleClose = () => setShow(false),
    handleShow = () => setShow(true);

  //selectors, dispatchers, and functions for redux
  const tempPreference = useSelector(store => store.temperaturePreference),
    activityLevel = useSelector(store => store.activityLevel),
    dispatch = useDispatch(),
    //use redux here to set global preferences
    handleTemperatureChange = evt => {
      const { value } = evt.target;
      value === "fahrenheit"
        ? dispatch(changeToFahrenheit())
        : dispatch(changeToCelsius())
    },
    handleActivityLevelChange = evt => {
      const { value } = evt.target;
      value === "high"
        ? dispatch(changeToHighActivity())
        : dispatch(changeToLowActivity())
    }

  const PreferencesButton = () => {
    return type === "nav"
      ? <Nav.Link onClick={handleShow}>Preferences</Nav.Link>
      : <Button variant="secondary" onClick={handleShow}>Preferences</Button>
  }

  return (
    <>
      {PreferencesButton()}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

    </>

  )
}

export default Preferences;