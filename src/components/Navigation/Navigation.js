import React from "react";
import { Link } from "react-router-dom";
import navigation from "./navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../pics/American-Energy-Logo.png";
import PhoneIcon from "@material-ui/icons/Phone";
import { NavLink } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className="navi-bar" sticky="top" bg="light" expand="lg">
      <Navbar.Brand className="navi-logo">
        <Link to="./">
          {" "}
          <img className="main-logo" src={logo} />{" "}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            {" "}
            <Link
              className="navi-link"
              style={{ color: "rgba(112,13,20,1)" }}
              to="./"
            >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link
              className="navi-link"
              style={{ color: "rgba(112,13,20,1)" }}
              to="./About"
            >
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link
              className="navi-link"
              style={{ color: "rgba(112,13,20,1)" }}
              to="./Services"
            >
              Services
            </Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link
              className="navi-link"
              style={{ color: "rgba(112,13,20,1)" }}
              to="./Info"
            >
              Benefits
            </Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link
              className="navi-link"
              style={{ color: "rgba(112,13,20,1)" }}
              to="./Gallery"
            >
              Gallery
            </Link>
          </Nav.Link>{" "}
          <NavLink>
            <Link
              className="navi-link"
              style={{ color: "rgba(112,13,20,1)" }}
              to="./Contact"
            >
              Contact
            </Link>
          </NavLink>
        </Nav>
        <a href="tel:760-876-3022" className="call">
          {" "}
          <PhoneIcon /> (760) 876-3022
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
