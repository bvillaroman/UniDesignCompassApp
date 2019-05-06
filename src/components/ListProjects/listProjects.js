import React from 'react';
import { connect } from "react-redux";
import { authenticateUser } from "../../state/actions";
import { CardColumns, Card } from 'react-bootstrap';

const ProjectCard = (props) => {
  var displayTitle = props.items.map(item => {
    return (
      <Card  key={item.id}>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
            <a href="#" className="card-link">Compass Link</a>
            <a href="#" className="card-link">Analytics Link</a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated {item.date_end}</small>
        </Card.Footer>
      </Card>
    );
  });
  return displayTitle;
}

const ListProjects = (props) => {
  return (
    <div id="processes" className="container">
      { props.processes === null ?
        ( <span>There are no projects.</span> ) :
        ( <CardColumns>{ ProjectCard(props.user.processes) }</CardColumns> )
      }
    </div>
  );
}

const mapStateToProps = ({state}) => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: (auth) => dispatch(authenticateUser(auth))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProjects);
