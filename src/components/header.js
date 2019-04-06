import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import NavBarStyles from '../styles/components.modules.css'

const Header = (props) => (
  <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
    <Navbar.Brand  variant="light"> <Link to="/"> {props.siteTitle}</Link> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        {/* NEED TO REPLACE LINKS ONCE READY!! */}
        <Nav.Link><Link to="/">About Us</Link></Nav.Link>
        <Nav.Link><Link to="/">Contact</Link></Nav.Link>
        <Nav.Link><Link to="/">Create</Link></Nav.Link>
        <Nav.Link><Link to='/Login'>Login</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

Header.propTypes = {
  siteTitle : PropTypes.string,
}