import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import NavBarStyles from '../styles/components.modules.css';
import { store } from '../state/store';

var userStatus = store.getState().Reducer.isAuthenticated;
var displayLogin = (userStatus == "false") ?
  ( <Nav.Link><Link rel="login" to="/Login">Login</Link></Nav.Link> ) :
  ( <Nav.Link><Link rel="logout" to="/">Logout</Link></Nav.Link> );

var displayProfile = (userStatus == "false") ?
  null : ( <Nav.Link><Link rel="profile" to="/">Profile</Link></Nav.Link> );

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
        {displayProfile}
        {displayLogin}
      </Nav>
    </Navbar.Collapse>
  </Navbar>

);


export default Header;
