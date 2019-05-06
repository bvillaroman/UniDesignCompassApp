import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';

const CompassCards = (props) => {
  const processes = props.processes.items.map(item => (
    <Card key={ item.id }>
      <Card.Body>
        <Card.Title>{ item.name }</Card.Title>
          <a href="#" className="card-link">Compass Link</a>
          <a href="#" className="card-link">Analytics Link</a>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated { item.date_end }</small>
      </Card.Footer>
    </Card>
  ));

  const displayProcesses = (props.processes === null) ? (<span>There are no projects.</span> ) 
                          : (<CardColumns>{ processes }</CardColumns>);

  return (
    <div id="processes" className="container">
      { displayProcesses }
    </div>
  )
}


export default CompassCards;