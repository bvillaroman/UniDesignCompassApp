import React from 'react';
import Button from "react-bootstrap/Button";
import { Row, Table } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import "../bootstrap.css"
import PropTypes from "prop-types"

const LogHandler = (props) => {
  return (
    <div>
        <Table bordered>
            {props.generateList(props.phase.key, props.currentPhase)}
        </Table>
        <Row>
            <Col>
                <Button
                    className='float-left'
                    variant={props.previous ? "primary" : "secondary"}
                    onClick={() => props.previousButtonHandler()}
                    active>
                    Previous
                </Button>
            </Col>
            <Col>
                <textarea
                  placeholder="Log Text"
                  rows="5"
                  cols="20"
                  value={props.log}
                  onChange={props.handleTextArea}
                />
            </Col>
            <Col>
              <Button
                  className='float-right'
                  variant={props.next ? "primary" : "secondary"}
                  onClick={(e) => props.nextButtonHandler()}
                  active
                >
                  Next
                </Button>
            </Col>
        </Row>
        <Row>
          <Col>
            <Button
              block
              size="sm"
              variant="warning"
              onClick={(e) => props.updateLogHandler()}
            >
              Update Log
            </Button>
          </Col>
        </Row>
    </div>
  );
}

export default LogHandler;

LogHandler.propTypes = {
    currentPhase :  PropTypes.string,
    phase : PropTypes.object,
    updateLogHandler: PropTypes.func,
    previous: PropTypes.bool,
    next: PropTypes.bool,
    nextButtonHandler: PropTypes.func,
    previousButtonHandler: PropTypes.func,
    handleTextArea: PropTypes.func,
    log: PropTypes.string,
    generateList: PropTypes.func
}