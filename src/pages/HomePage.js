import React from "react";
import inter from "../images/interesting.jpg";
import Layout from '../components/layout';
import Header from "../components/header"
import Login from "./Login";
class IndexPage extends React.Component {
  render() {
      return (
        <Layout>
          <img alt={"inter"} src={inter}></img>
        </Layout>
      );
  }
}
export default IndexPage;
