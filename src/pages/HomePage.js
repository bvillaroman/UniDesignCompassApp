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
          <div className="presentation">
            <img id="homeImg" role="presentation" alt={"inter"} src={inter}></img>
            <h1 className="presentation-description">DESIGN COMPASS</h1>
            <h3 className="presentation-description1">to facililate</h3>
            <h1 className="presentation-description2">Creation</h1>
          </div>
        </Layout>
      );
  }
}
export default IndexPage;
