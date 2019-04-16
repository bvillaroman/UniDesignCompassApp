import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav ,NavItem} from 'react-bootstrap';
import NavBarStyles from '../styles/components.modules.css'

const Header = (props) => (
  <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
    <Navbar.Brand variant="light"> <Link to="/"> {props.siteTitle}</Link> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        {/* NEED TO REPLACE LINKS ONCE READY!! */}
        <NavItem><Link to="/About">About Us</Link></NavItem >
        <NavItem><Link to="/">Contact</Link></NavItem >
        <NavItem><Link to="/">Create</Link></NavItem >
        <NavItem><Link to="/Compass">Compass</Link></NavItem >
        <NavItem><Link to="/Login">Login</Link></NavItem >
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


export default Header;
