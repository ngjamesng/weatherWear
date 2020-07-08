import React from "react";
import { Jumbotron, Container } from "react-bootstrap";



function About() {

  return (
    <Jumbotron>
      <Container>
        <h2 className="py-3 text-center">About WeatherWear</h2>
        <p>Hello, I'm James. WeatherWear was built as a side project to help people get a general idea of what clothes should be worn based on the weather conditions.
        </p>
        <h5>Notable technologies used:</h5>
        <ul>
          <li><a href="https://reactjs.org/" target="blank">React.js</a></li>
          <li><a href="https://redux.js.org/" target="blank">Redux.js</a></li>
          <li><a href="https://react-bootstrap.netlify.app/" target="blank">React Bootstrap</a></li>
          <li><a href="https://expressjs.com/" target="blank">Express.js</a></li>
          <li><a href="https://www.postgresql.org/" target="blank">PostgreSQL</a></li>
          <li><a href="https://openweathermap.org/api" target="blank">OpenWeatherMap API</a></li>
        </ul>
          You can see more of my work here: <a href="https://jamesng.dev" target="blank">Jamesng.dev</a>
      </Container>
    </Jumbotron>
  )
}

export default About;