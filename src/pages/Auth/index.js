import React from "react";
import Layout from '../../components/Layout';
import SignIn from './SignIn'
import SignUp from './SignUp'
import {AuthSwitchButton,AuthCard} from "../../styles/AuthPage"


const AuthenticationPage = (props) => (
  <Layout>
    {/* <SignIn/> */}
    <AuthCard alignSelf="center" elevation="medium">
      <SignUp/>
    </AuthCard>
  </Layout>
);
export default AuthenticationPage;
