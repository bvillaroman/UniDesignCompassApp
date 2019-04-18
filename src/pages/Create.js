import React from "react";
import inter from "../images/home-image-min.jpg";
import Layout from '../components/layout';
import { CardDeck, Card, Button, Form } from 'react-bootstrap';
import CompassForm from '../components/compassForm'

const CustomOrPremade = (props) =>  (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Do you want a custom Compass or a prebuilt Compass?</Form.Label>
      <Button variant="primary" > Custom </Button>
      <Button variant="primary" > Default </Button>
    </Form.Group>
)

const PhaseNumber = (props) =>  (
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>How many phases are in your design process</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </Form.Control>
  </Form.Group>
)

const DescribePhases = (props) =>  (
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Describe each phase in your design process</Form.Label>
      <Form.Label>Title of Phase</Form.Label>
      <Form.Control type="email" placeholder="Title of Title" />
      <Form.Label>Description of your Phase</Form.Label>
      <Form.Control as="textarea" rows="3" />
  </Form.Group>
)

const CreatePage = (props) => (
  <Layout>
     <CompassForm>
      <CustomOrPremade />
     </CompassForm>
     <CompassForm>
      <PhaseNumber/>
     </CompassForm>
     <CompassForm>
      <DescribePhases/>
     </CompassForm>
  </Layout>
);
export default CreatePage;
