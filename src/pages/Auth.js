import React,{useState} from "react";
import Layout from '../components/Layout';
import SignIn from '../components/AuthComponents/SignIn'
import SignUp from '../components/AuthComponents/SignUp'
import {AuthCard} from "../styles/AuthPage"
import { Tab,Tabs } from "grommet";
import {AuthProvider} from "../components/AuthComponents/context/context"

export const AuthenticationPage = (props) => {
  const [tab,setTab] = useState(0);

  const onActive = (index) => setTab(index)
  
  return (
    <Layout>
      <AuthProvider>
        <AuthCard alignSelf="center" elevation="medium">
        <Tabs activeIndex={tab} onActive={onActive}>
          <Tab title="Sign In" >
            <SignIn switchToSignUp={e => onActive(1)}/>
          </Tab>
          <Tab title="Sign Up">
            <SignUp switchToVerification={e => onActive(2)} switchToSignIn={e => onActive(0)}/>
          </Tab>
        </Tabs>
        </AuthCard>
      </AuthProvider>
    </Layout>
  );
}
