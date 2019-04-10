import React from "react";
import inter from "../images/interesting.jpg";
import Layout from '../components/layout';
import Header from "../components/header"
import Login from "./Login";
import Route from 'react-router-dom';
import IndexPage from './index';
class HomePage extends React.Component {
  render() {
    return (
      
      <Layout>
        <img alt={"inter"} src={inter}></img>
      </Layout>
      
      );
  }
}
export default HomePage;
