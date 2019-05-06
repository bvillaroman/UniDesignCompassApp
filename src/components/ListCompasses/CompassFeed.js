import React from 'react';
import { Dropdown } from 'react-bootstrap';

const CompassFeed = (props) => {
  const processes = props.processes.items.map(item => (
    <React.Fragment>
      <Dropdown.Item eventKey="4">{ item.name }</Dropdown.Item>
    </React.Fragment>
  ));
  
  const displayProcesses = (props.processes === null) ? (<span>There are no projects.</span> ) 
                         : (<Dropdown.Menu  id="dropdown-item-button"  title="Projects">{ processes }</Dropdown.Menu>);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"> Compasses </Dropdown.Toggle>
      { displayProcesses }
    </Dropdown>
  )
}

export default CompassFeed;