import React from 'react';
import Button from "react-bootstrap/Button";
import { Row, Table,Col, Container, Form } from 'react-bootstrap';
import "../bootstrap.css"
import PropTypes from "prop-types"

const LogHandler = (props) => {
  return (
    <Container>
      <Row className="log-container">
        <Col sm={8}>
            <div className="log-feed">
              {props.logs}
            </div>
        </Col>
        <Col sm={4}>
          <Form.Group className="log-editor">
              <Form.Control 
                as="textarea" 
                className="text-area"
                onChange={props.handleTextArea} 
                value={props.log}
              />
              <Button
                block
                size="sm"
                variant="warning"
                className="submit-button"
                onClick={(e) => props.submitLog(e,props.currentTime)}
              >
                Submit Log
              </Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default LogHandler;

LogHandler.propTypes = {
    currentPhase :  PropTypes.number,
    phase : PropTypes.object,
    updateLogHandler: PropTypes.func,
    previous: PropTypes.bool,
    next: PropTypes.bool,
    nextButtonHandler: PropTypes.func,
    previousButtonHandler: PropTypes.func,
    handleTextArea: PropTypes.func,
    log: PropTypes.string,
    logs: PropTypes.array,
}