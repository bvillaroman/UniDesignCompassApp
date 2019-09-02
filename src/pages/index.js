import React from "react";
import Landing from "./Landing"
import Layout from '../components/Layout';
import {globalStore} from "../context/context"

const IndexPage = (props) => {
  const {user,compass} = globalStore()
  return (
    <Layout>
      {
        user.hasOwnProperty("email") ? <p>user is signed in</p>: <Landing path="/" />
      }
    </Layout>
  )
}
export default IndexPage;
