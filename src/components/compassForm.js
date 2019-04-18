import React from "react";
import inter from "../images/home-image-min.jpg";
import Layout from '../components/layout';
import { CardDeck, Card, Button, Form } from 'react-bootstrap';

const CompassForm = (props) => (
  <Card>
      {props.children}
  </Card>
);
export default CompassForm;
