import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// import "./SiteNav.scss";
import { Navbar, Nav } from "react-bootstrap";
import Preferences from "../Preferences";

function SiteNav() {
  return (
    <Navbar bg="light" expand="sm" collapseOnSelect>
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
          <div>
            <Preferences type={"nav"} />
          </div>
          <LinkContainer to="/about">
            <Nav.Link> About </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default SiteNav;