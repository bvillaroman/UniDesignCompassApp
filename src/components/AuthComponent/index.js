import React,{useState} from "react";
import SignIn from './SignIn'
import SignUp from './SignUp'
import {AuthCard} from "../../styles/AuthPage"
import { Tab,Tabs } from "grommet";
import {AuthProvider} from "../../context/AuthPage/context"

const AuthenticationPage = (props) => {
  const [tab,setTab] = useState(0);

  const onActive = (index) => setTab(index)
  
  return (
    <AuthProvider>
      <AuthCard alignSelf="center" >
        <Tabs activeIndex={tab} onActive={onActive}>
          <Tab >
            <SignIn switchToSignUp={e => onActive(1)}/>
          </Tab>
          <Tab >
            <SignUp switchToVerification={e => onActive(2)} switchToSignIn={e => onActive(0)}/>
          </Tab>
        </Tabs>
      </AuthCard>
    </AuthProvider>
  );
}
export default AuthenticationPage ;
