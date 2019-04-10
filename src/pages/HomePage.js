import React from "react";
import inter from "../images/home-image.jpg";
import Layout from '../components/layout';

class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displaylogin: false,
      isAuthenticated: false
    }
    this.loginHandler = this.loginHandler.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
  }

  loginHandler() {
    this.setState({ displaylogin: !this.state.displaylogin });
  }
  handleAuth(){
    this.setState({isAuthenticated:true});
  }

  render() {
      return (
        <Layout>
          <img alt={"inter"} src={inter}></img>
        </Layout>
      );
  }
}
export default IndexPage;
