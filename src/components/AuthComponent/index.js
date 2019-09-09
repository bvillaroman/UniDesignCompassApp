import React,{useState} from "react";
import SignIn from './SignIn'
import SignUp from './SignUp'
import {FormContainer} from "../../styles/Form"
import { Tab,Tabs } from "grommet";

const AuthenticationPage = (props) => {
  const [tab,setTab] = useState(0);

  const onActive = (index) => setTab(index)
  
  return (
    <FormContainer alignSelf="center" >
      <Tabs activeIndex={tab} onActive={onActive}>
        <Tab >
          <SignIn switchToSignUp={e => onActive(1)}/>
        </Tab>
        <Tab >
          <SignUp switchToVerification={e => onActive(2)} switchToSignIn={e => onActive(0)}/>
        </Tab>
      </Tabs>
    </FormContainer>
  );
}
export default AuthenticationPage ;
