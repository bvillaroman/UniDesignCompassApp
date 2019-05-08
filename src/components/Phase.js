import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import { Row, ButtonGroup, Table, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import "../components/bootstrap.css"
import { ConsoleLogger } from '@aws-amplify/core';

class Phase extends Component {

    handleTime = (props) => {//Helper function
    }
    render() {
        return (
            <Timer
                initialTime={this.props.phase.time}
                startImmediately={false}
                onStart={() => console.log('Start')}
                onResume={() => console.log('Resume')}
                onPause={() => { console.log("Pause") }}
                onStop={() => console.log('Stop')}
                onReset={() => console.log('Reset')}
            >
                {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
                    <React.Fragment>
                        <div className="d-flex flex-column" >
                            <ButtonGroup size="lg">
                                <Button
                                    key={this.props.phase.key}
                                    onClick={() => {
                                        this.props.compassButtonHandler(this.props.phase);
                                        (getTimerState() === "PLAYING") ? this.handleTime(pause(), this.props.adjustTime(this.props.index, getTime())) : start()
                                    }}
                                    block
                                    className='text-left col-10'
                                    variant={(this.props.currentPhase === this.props.phase.key) ? "success" : "outline-warning"}

                                >
                                    {this.props.phase.name}
                                </Button>
                                <Button
                                    className='col-2'
                                    variant={(this.props.currentPhase === this.props.phase.key) ? "danger" : "outline-primary"}
                                    onClick={() => {
                                        this.props.compassButtonHandler(this.props.phase);
                                        (getTimerState() === "PLAYING") ? (this.handleTime(pause(), this.props.adjustTime(this.props.index, getTime()))
                                        ) : start()
                                    }}
                                >
                                    {(this.props.currentPhase === this.props.phase.key) ? null : (stop())}
                                    <Timer.Hours />:
                                     <Timer.Minutes />:
                                     <Timer.Seconds />
                                </Button>
                            </ButtonGroup>

                            {(this.props.currentPhase === this.props.phase.key) ? (
                                <div>
                                    <Table bordered>
                                        {this.props.generateList(this.props.phase.key, this.props.currentPhase)}
                                    </Table>
                                    <Row>
                                        <Col>
                                            <Button
                                                className='float-left'
                                                variant={this.props.previous ? "primary" : "secondary"}
                                                onClick={() => this.props.previousButtonHandler()}
                                                active>Previous
                                             </Button>
                                        </Col>
                                        <Col>
                                            <textarea
                                                placeholder="Log Text"
                                                rows="5"
                                                cols="20"
                                                value={this.props.log}
                                                onChange={this.props.handleTextArea}
                                            >
                                            </textarea>
                                        </Col>
                                        <Col>
                                            <Button
                                                className='float-right'
                                                variant={this.props.next ? "primary" : "secondary"}
                                                onClick={(e) => this.props.nextButtonHandler()}
                                                active>
                                                Next
                                                                             </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            <Button
                                                block
                                                size="sm"
                                                variant="warning"
                                                onClick={(e) => this.props.updateLogHandler()}
                                            >Update Log
                                             </Button>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                    <br></br>
                                </div>
                            ) : (
                                    <div>
                                    </div>
                                )}
                        </div>
                    </React.Fragment>
                )}
            </Timer>
        );
    }

}

export default Phase;