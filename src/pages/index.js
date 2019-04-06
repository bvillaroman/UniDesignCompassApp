import React from "react";
import { CustomSignIn } from "./CustomSignIn";
import {Authenticator} from "aws-amplify-react/dist/Auth"
import {SignIn} from "aws-amplify-react";
import config from "../aws-exports";
import inter from "../images/interesting.jpg";
import Header from '../components/header';

class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displaylogin: false,
    }
    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler(){
    this.setState({displaylogin:!this.state.displaylogin});
  }

  render() {
    if (this.state.displaylogin === false) {
      return (
        <div>
          <Header />
          <img src={inter}></img>
        { /*
        <div>
          <nav className='navbarlist'>
            <label className='listitem' onClick=''>Home</label>
            <label className='listitem' onClick=''>About Us</label>
            <label className='listitem' onClick='' >Getting Started</label>
            <label className='listitem' onClick={this.loginHandler}>Login</label>
          </nav>
          <img src={inter}></img>
        </div>
        */ }
      </div>
      );
    }else{
      return(
        <div>
          <nav className='navbarlist'>
            <label className='listitem' onClick={this.loginHandler}>Home</label>
            <label className='listitem' onClick=''>About Us</label>
            <label className='listitem' onClick='' >Getting Started</label>
            <label className='listitem' onClick=''>Login</label>
          </nav>
          <div>
            <br/>
            <br/>
          <Authenticator hide={[SignIn]} amplifyConfig={config}>
          <CustomSignIn/>
          </Authenticator>
          </div>
        </div>
      )
    }
  }
}
export default IndexPage;
