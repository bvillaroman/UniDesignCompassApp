import React from "react"
import {SignIn} from "aws-amplify-react";
import config from "../aws-exports";
import Login from "./Login";
import {Authenticator} from "aws-amplify-react/dist/Auth"

const Sec = () => (  
  <Authenticator hide={[SignIn]} amplifyConfig={config}>
    <Login/>
  </Authenticator>
)

export default Sec;
