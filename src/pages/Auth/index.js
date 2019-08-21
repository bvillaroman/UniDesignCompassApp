import React,{useState} from "react";
import Layout from '../../components/Layout';
import SignIn from './SignIn'
import SignUp from './SignUp'
import {AuthSwitchButton,AuthCard} from "../../styles/AuthPage"
import { Tab,Tabs } from "grommet";


const AuthenticationPage = (props) => {
  const [tab,setTab] = useState(0);

  const onActive = (index) => setTab(index)
  return (
  <Layout>

    <AuthCard alignSelf="center" elevation="medium">
    <Tabs activeIndex={tab} onActive={onActive}>
      <Tab title="Sign In" >
        <SignIn switchToSignUp={e => onActive(1)}/>
      </Tab>
      <Tab title="Sign Up">
        <SignUp switchToSignIn={e => onActive(0)}/>
      </Tab>
    </Tabs>
    </AuthCard>
  </Layout>
);
}
export default AuthenticationPage;
