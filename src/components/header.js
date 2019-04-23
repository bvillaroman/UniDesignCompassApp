import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logOutUser } from '../state/actions';

const signedIn=(props)=>{
  if(props.isAuthenticated){
    return(<Nav.Link><Link rel="profile" to="/Profile">Profile</Link></Nav.Link>)
  }
}

const Header = (props) => {
  return (
    <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
      <Navbar.Brand variant="light"> <Link to="/"> {props.siteTitle}</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link><Link rel="about" to="/About">About Us</Link></Nav.Link>
          <Nav.Link><Link rel="compass" to="/Compass">Compass</Link></Nav.Link>
          <Nav.Link><Link rel="analytics" to="/Analytics">Analytics</Link></Nav.Link>
          {signedIn(props)}
          {
            props.isAuthenticated ?
              (<Nav.Link><Link rel="logout" to="/" onClick={() => { props.logOutUser(); navigate("/"); }}>Logout</Link></Nav.Link>)
              : (<Nav.Link><Link rel="login" to="/Login">Login</Link></Nav.Link>)
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

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

