import React, { Component } from 'react';
import { connect } from "react-redux";
import { authenticateUser } from "../../state/actions";
import { CardColumns, Card } from 'react-bootstrap';

class ListProjects extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    var displayTitle = this.props.user.processes.items.map(item => {
      return (
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
      );
    });

    var displayProcesses = (this.props.user.processes === null) ?
    ( <span>There are no projects.</span> ) : <CardColumns>{ displayTitle }</CardColumns>;

    return (
      <div id="processes" className="container">
        { displayProcesses }
      </div>
    );
  }
}

export default ListProjects;
