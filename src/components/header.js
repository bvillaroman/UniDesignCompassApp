import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // NEED TO OBTAIN PROPS FROM PARENT TO IDENTIFY WHETHER TO SHOW SIGN IN OR LOG OUT
  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          {/* add <a className="navbar-brand"><img src="../.."></a>* when we have a logo */}
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapse_target" aria-controls="collapse_target" aria-expanded="false" aria-label="Toggle naviagation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-text">Universal Design Compass</span>
          <div className="collapse navbar-collapse" id="collapse_target">
            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link">About Us</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link">Contact</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link">Create</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link">LogIn</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
