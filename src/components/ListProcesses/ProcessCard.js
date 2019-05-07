import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "gatsby"

const ProcessCard = ({process: {id,name,date_end}}) => (
  <Card key={ id }>
    <Card.Body>
      <Card.Title>{ name }</Card.Title>
        {/* <Link to="/Dashboard" className="card-link">Compass Link</Link>
        <Link to="/Analytics" className="card-link">Analytics Link</Link> */}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated { date_end }</small>
    </Card.Footer>
  </Card>
);

export default ProcessCard;