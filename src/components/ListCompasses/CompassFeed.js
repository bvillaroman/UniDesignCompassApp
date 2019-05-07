import React from 'react';
import { Dropdown } from 'react-bootstrap';

const CompassFeed = (props) => {
  const compasses = props.compasses.map(item => (
    <React.Fragment>
      <Dropdown.Item eventKey="4">{ item.name }</Dropdown.Item>
    </React.Fragment>
  ));
  
  const displayCompasses = (props.compasses === null) ? (<span>There are no projects.</span> ) 
                         : (<Dropdown.Menu id="dropdown-item-button" title="Compasses">{ compasses }</Dropdown.Menu>);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"> Compasses </Dropdown.Toggle>
      { displayCompasses }
    </Dropdown>
  )
}

export default CompassFeed;