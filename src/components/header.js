import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // NEED TO OBTAIN PROPS FROM PARENT TO IDENTIFY WHETHER TO SHOW SIGN IN OR LOG OUT
  render () {
    return (
      <div>
        <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
          <Navbar.Brand>Universal Design Compass</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {/* NEED TO REPLACE LINKS ONCE READY!! */}
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/">About Us</Link></Nav.Link>
              <Nav.Link><Link to="/">Contact</Link></Nav.Link>
              <Nav.Link><Link to="/">Create</Link></Nav.Link>
              <Nav.Link><Link to="/">Login</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
