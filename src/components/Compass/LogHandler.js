import React from 'react';
import Button from "react-bootstrap/Button";
import { Row, Table,Col, Container, Form } from 'react-bootstrap';
import "../bootstrap.css"
import PropTypes from "prop-types"

const LogHandler = (props) => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Container className="log-container">
            <div className="log-feed">
              {props.logs}
            </div>
          </Container>
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
    // <div>
    //     <Table bordered responsive>
    //       {props.logs}
    //     </Table>
    //     <Row>
    //         {/* <Col>
    //             <Button
    //                 className='float-left'
    //                 variant={props.previous ? "primary" : "secondary"}
    //                 onClick={() => props.previousButtonHandler()}
    //                 active>
    //                 Previous
    //             </Button>
    //         </Col> */}
    //         <Col>
    //             <textarea
    //               placeholder="Log Text"
    //               rows="5"
    //               cols="20"
    //               value={props.log}
    //               onChange={props.handleTextArea}
    //             />
    //         </Col>
    //         {/* <Col>
    //           <Button
    //               className='float-right'
    //               variant={props.next ? "primary" : "secondary"}
    //               onClick={(e) => props.nextButtonHandler()}
    //               active
    //             >
    //               Next
    //             </Button>
    //         </Col> */}
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button
    //           block
    //           size="sm"
    //           variant="warning"
    //           onClick={(e) => props.submitLog(e,props.currentTime)}
    //         >
    //           Submit Log
    //         </Button>
    //       </Col>
    //     </Row>
    // </div>
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