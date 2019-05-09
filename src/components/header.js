import { Link, navigate } from "@reach/router"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logOutUser } from '../state/actions';

const signedIn = (props) =>  (
  <React.Fragment>
    <NavItem className="nav-link"><Link style={styles.link} activeStyle={styles.linkActive} rel="create" to="/Create">Create Compass</Link></NavItem>
    <NavItem className="nav-link"><Link style={styles.link} activeStyle={styles.linkActive} rel="dashboard" to="/Dashboard">Dashboard</Link></NavItem>
    <NavItem className="nav-link"><Link style={styles.link} activeStyle={styles.linkActive} rel="profile" to="/Profile">Profile</Link></NavItem>
    <NavItem className="nav-link"><Link style={styles.link} rel="logout" to="/" onClick={() => { props.logOutUser(); navigate("/"); }}>Logout</Link></NavItem>
  </React.Fragment>
)

const signedOut = (props) => ( 
  <React.Fragment>
    <NavItem><Link style={styles.link} activeStyle={styles.linkActive} rel="about" to="/About">About</Link></NavItem>
    <NavItem><Link style={styles.link} activeStyle={styles.linkActive} rel="login" to="/Login">Login</Link></NavItem>
  </React.Fragment>
)

const Header = (props) => {
  return (
    <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
      <Navbar.Brand variant="light"> 
        <Link to={props.isAuthenticated ? "/Dashboard" : "/"} style={styles.link}> {props.siteTitle}</Link> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
          {props.isAuthenticated ? signedIn(props) : signedOut(props)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  linkActive: {
    textDecoration: 'underline'
  }
}

Header.propsTypes = {
  isAuthenticated: PropTypes.bool,
  authenticateUser: PropTypes.func
}

const mapStateToProps = ({ state }) => ({
  isAuthenticated: state.isAuthenticated
})
const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

