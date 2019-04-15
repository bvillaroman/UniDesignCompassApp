import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import NavBarStyles from '../styles/components.modules.css'

const Header = (props) => (
  <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
    <Navbar.Brand variant="light"> <Link to="/"> {props.siteTitle}</Link> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        {/* NEED TO REPLACE LINKS ONCE READY!! */}
        <Nav.Link><Link rel="about" to="/About">About Us</Link></Nav.Link>
        <Nav.Link><Link rel="create" to="/">Create</Link></Nav.Link>
        <Nav.Link><Link rel="compass" to="/Compass">Compass</Link></Nav.Link>
        {/* The two below requires a props.status (loged in or out?) to determine what link to display */}
        <Nav.Link><Link rel="profile" to="/">Profile</Link></Nav.Link>
        <Nav.Link><Link rel="login" to="/Login">Login</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


export default Header;
