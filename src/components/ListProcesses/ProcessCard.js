import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from '@reach/router'

const ProcessCard = ({process: {id,name,date_end}, selectProcess  }) => (
  <Card key={ id }>
    <Card.Body>
      <Card.Title>{ name }</Card.Title>
        <Link to={`/Process/${id}`}>View Compass</Link>
        {/* <button onClick={() => {selectProcess(id)}}>View Compass</button>
        <button onClick={() => {selectProcess(id)}}>View Analyctics</button> */}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated { date_end }</small>
    </Card.Footer>
  </Card>
)

export default ProcessCard;