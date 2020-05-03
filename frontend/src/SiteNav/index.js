import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// import "./SiteNav.scss";
import { Navbar, Nav } from "react-bootstrap";

function SiteNav() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand>
        <Link to="/">WeatherWear</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
        <Nav className="ml-auto">
          <LinkContainer to="/check">
            <Nav.Link>Check Weather </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/results">
            <Nav.Link>Past Results </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/preferences">
            <Nav.Link> Preferences </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link> About </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default SiteNav;