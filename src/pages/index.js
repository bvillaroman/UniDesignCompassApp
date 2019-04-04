import React from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import Navbar from "../components/Navbar";
import { Redirect } from "@reach/router";
import { CustomSignIn } from "./CustomSignIn";
import {Authenticator} from "aws-amplify-react/dist/Auth"
import {SignIn} from "aws-amplify-react";
import config from "../aws-exports";
import inter from "../images/interesting.jpg";
class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displaylogin: false,
    }
    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler(){
    this.setState({displaylogin:true});
  }

  render() {
    if (this.state.displaylogin == false) {
      return (
        <div>
          <nav className='navbarlist'>
            <label className='listitem' onClick=''>Home</label>
            <label className='listitem' onClick=''>About Us</label>
            <label className='listitem' onClick='' >Getting Started</label>
            <label className='listitem' onClick={this.loginHandler}>Login</label>
          </nav>
          <img src={inter}></img>
        </div>
      );
    }else{ 
      return(
        <div>
          <Authenticator hide={[SignIn]} amplifyConfig={config}>
          <CustomSignIn/>
          </Authenticator>
        </div>
      )
    }
  }
}
export default IndexPage;
