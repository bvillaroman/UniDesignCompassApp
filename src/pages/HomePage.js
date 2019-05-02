import React from "react";
import {navigate} from "gatsby"
import inter from "../images/home-image-min.jpg";
import Layout from '../components/layout';
import { CardDeck, Card, Button } from 'react-bootstrap';

const HomePage = (props) => (
  <Layout>
    <div className="presentation">
      <img id="homeImg" role="presentation" alt={"inter"} src={inter}></img>
      <h1 className="presentation-description">DESIGN COMPASS</h1>
      <h3 className="presentation-description1">to facililate</h3>
      <h1 className="presentation-description2">Creation</h1>

      <Button className="presentation-button" variant="info" size="lg" onClick={() => {navigate("/Create")}}>Begin</Button>
    </div>
    <CardDeck>
      <Card bg="danger" text="white">
        <Card.Header>Objective</Card.Header>
        <Card.Body>
          <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="warning" text="dark">
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
export default HomePage;
