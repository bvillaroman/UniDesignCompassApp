import React from "react";
import Login from "./CustomSignIn";
import inter from "../images/interesting.jpg";

class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displaylogin: false,
      isAuthenticated: false
    }
    this.loginHandler = this.loginHandler.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
  }

  loginHandler() {
    this.setState({ displaylogin: !this.state.displaylogin });
  }
  handleAuth(){
    this.setState({isAuthenticated:true});
  }

  render() {
    console.log(this.state)
    if (this.state.isAuthenticated ==false) {
      if (this.state.displaylogin == false) {
        return (
          <div>
            <nav className='navbarlist'>
              <label className='listitem' onClick=''>Home</label>
              <label className='listitem' onClick=''>About Us</label>
              <label className='listitem' onClick='' >Getting Started</label>
              <label className='listitem' onClick={this.loginHandler}>Login</label>
            </nav>
            <div>
              <img src={inter} className='img-fluid w-100' ></img>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <nav className='navbarlist'>
              <label className='listitem' onClick={this.loginHandler}>Home</label>
              <label className='listitem' onClick=''>About Us</label>
              <label className='listitem' onClick='' >Getting Started</label>
              <label className='listitem' onClick=''>Login</label>
            </nav>
            <div>
              <Login handler={this.handleAuth} />
            </div>
          </div>
        )
      }
    }
    else {
      return (
        <div>
          <nav className='navbarlist'>
            <label className='listitem' onClick=''>Home</label>
            <label className='listitem' onClick=''>About Us</label>
            <label className='listitem' onClick='' >Getting Started</label>
            <label className='listitem' onClick=''>Logout</label>
          </nav>
          <div>
            <img src={inter} className='img-fluid w-100' ></img>
          </div>
        </div>
      )
    }
  }
}
export default IndexPage;
