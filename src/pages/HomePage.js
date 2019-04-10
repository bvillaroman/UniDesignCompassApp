import React from "react";
import inter from "../images/home-image.jpg";
import Layout from '../components/layout';
import { CardDeck, Card, Button } from 'react-bootstrap';

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
            {/*find better way to link Compass page*/}
            <Button className="presentation-button" variant="info" size="lg" href="/Compass">Begin</Button>
          </div>
          {/* REPLACE CARD TEXT */}
          <CardDeck>
            <Card bg="dark" text="white" border="warning">
              <Card.Header>Objective</Card.Header>
              <Card.Body>
                <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="secondary" text="white" border="success">
              <Card.Header>Features</Card.Header>
              <Card.Body>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Layout>
      );
  }
}
export default IndexPage;
