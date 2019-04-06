import React from "react"
import {SignIn} from "aws-amplify-react";
import config from "../aws-exports";
import Login from "./CustomSignIn";
import {Authenticator} from "aws-amplify-react/dist/Auth"
class sec extends React.Component{
  render(){
    return(
      <Authenticator hide={[SignIn]} amplifyConfig={config}>
        <Login/>
      </Authenticator>
    )
  }
}

export default sec
