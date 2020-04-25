import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
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
          <Nav.Link as={Link} to="/check">Check Weather </Nav.Link>
          <Nav.Link as={Link} to="/results">Check Past Results </Nav.Link>
          <Nav.Link as={Link} to="/about"> About </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default SiteNav;