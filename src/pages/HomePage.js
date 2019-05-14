import React from "react";
import {navigate} from "gatsby"
import inter from "../images/home-image-min.jpg";
import obj from "../images/group-working-together.jpg";
import feat from "../images/eie-designprocessmodel-elem.png";
import Layout from '../components/layout';
import { CardDeck, Card, Button } from 'react-bootstrap';

const HomePage = (props) => (
  <Layout>
    <div className="presentation">
      <img id="homeImg" role="presentation" alt={"inter"} src={inter}></img>
      <h1 className="presentation-description">DESIGN COMPASS</h1>
      <h3 className="presentation-description1">to facililate</h3>
      <h1 className="presentation-description2">Creation</h1>

      <Button className="presentation-button" variant="info" size="lg" onClick={() => {navigate("/Login")}}>Begin</Button>
    </div>
    <CardDeck>
      <Card bg="danger" text="white">
        <Card.Header>Objective</Card.Header>
        <Card.Body>
          <Card.Text>
            The Design Compass is a classroom tool for helping students and professionals record and reflect on their design process
            as they work on and complete a design challenge. The Design Compass software provides an interface where students can
            identify and record the various design steps they used while performing them, and add digital notes and pictures to document
            their work. In the analysis view, a record of the work done as well as a graph of time spent on each design step can be shared
            and discussed with instructors or coworkers.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={obj} style={{paddingLeft: "1em", paddingRight: "1em"}} />
      </Card>
      <Card bg="warning" text="dark">
        <Card.Header>Features</Card.Header>
        <Card.Body>
          <Card.Text>
            The user interface has two pages. The Compass page gives the option of a standard engineering design process model as well as
            a custom model with the means for entering short text-based descriptions by users, and clocks to note time spent on each design
            step. The Log page provides a spreadsheet-styled chronological list of steps taken, and is the place where users can view, edit
            and append the logged information. By clicking on another button in the Log, users can view aggregated data in histogram form
            on steps they have taken during a single design session or an entire design project.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={feat} style={{paddingLeft: "1em", paddingRight: "1em"}}/>
      </Card>
    </CardDeck>
  </Layout>
);
export default HomePage;
