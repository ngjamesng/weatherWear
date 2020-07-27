import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Button } from "react-bootstrap";


function Home() {
  return (
    <Jumbotron>
      <Container>
        <h1>Welcome to WeatherWear</h1>
        <p>
        Do you ever step outside, only to realize you're unprepared for unexpected weather conditions? 
        You'd have to go back inside to change what you're wearing, and maybe even bring an umbrella. 
        WeatherWear is intended to help people get clothing recommendations based on weather conditions, 
        such as temperature, humidity, wind speed, and precipitation.
      </p>
      <Button variant="primary" as={Link} to="/check">
        try it out
      </Button>{" "}
      <Button variant="primary"as={Link} to="/results">past results
        </Button>{" "}
      <Button variant="primary"as={Link} to="/about">more info
        </Button>{" "}
      </Container>
    </Jumbotron>
  )
}

export default Home;