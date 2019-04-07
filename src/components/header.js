import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import {store} from '../state/store';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
    this.propTypes = {
      siteTitle: PropTypes.string,
    };
  }

  render() {
    const isAuth = (store.getState().Reducer.isAuthenticated) ?
      <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
        <Navbar.Brand variant="light"> <Link to="/"> {this.props.siteTitle}</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {/* NEED TO REPLACE LINKS ONCE READY!! */}
            <Nav.Link><Link to="/">About Us</Link></Nav.Link>
            <Nav.Link><Link to="/">Contact</Link></Nav.Link>
            <Nav.Link><Link to="/">Create</Link></Nav.Link>
            <Nav.Link><Link to="/Compass">Compass</Link></Nav.Link>
            <Nav.Link><Link to='/'>Logout</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      :
      <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
        <Navbar.Brand variant="light"> <Link to="/"> {this.props.siteTitle}</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {/* NEED TO REPLACE LINKS ONCE READY!! */}
            <Nav.Link><Link to="/">About Us</Link></Nav.Link>
            <Nav.Link><Link to="/">Contact</Link></Nav.Link>
            <Nav.Link><Link to="/">Create</Link></Nav.Link>
            <Nav.Link><Link to="/Compass">Compass</Link></Nav.Link>
            <Nav.Link><Link to='/Login'>Login</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    return (
      isAuth
    )
  }
}
export default Header;
