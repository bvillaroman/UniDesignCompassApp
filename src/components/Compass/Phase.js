import React from 'react';
import Button from "react-bootstrap/Button";
import { Row, ButtonGroup, Table } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import "../bootstrap.css"
import PropTypes from "prop-types"
import LogHandler from "./LogHandler"

const Phase = (props) => {
    return (
        <Timer
            initialTime={props.phase.time}
            startImmediately={false}
            onStart={() => console.log('Start')}
            onResume={() => console.log('Resume')}
            onPause={() => { console.log("Pause") }}
            onStop={() => console.log('Stop')}
            onReset={() => console.log('Reset')}
        >
            {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
                <div className="d-flex flex-column" >
                    <ButtonGroup size="lg">
                        <Button
                            key={props.phase.key}
                            onClick={() => {
                                props.compassButtonHandler(props.phase);
                                if(getTimerState() === "PLAYING") {
                                    pause(); 
                                    props.adjustTime(props.index, getTime());
                                } else {
                                    start()
                                }
                            }}
                            block
                            className='text-left col-10'
                            variant={(props.currentPhase === props.phase.key) ? "success" : "outline-warning"}

                        >
                            {props.phase.name}
                        </Button>
                        <Button
                            className='col-2'
                            variant={(props.currentPhase === props.phase.key) ? "danger" : "outline-primary"}
                            onClick={() => {
                                props.compassButtonHandler(props.phase);
                                if(getTimerState() === "PLAYING") {
                                    pause(); 
                                    props.adjustTime(props.index, getTime());
                                } else {
                                    start()
                                }
                            }}
                        >
                            {(props.currentPhase === props.phase.key) ? null : (stop())}
                            <Timer.Hours />:
                            <Timer.Minutes />:
                            <Timer.Seconds />
                        </Button>
                    </ButtonGroup>
                    {
                        (props.currentPhase === props.phase.key) ? (
                            <LogHandler
                                currentPhase={props.currentPhase}
                                phase={props.phase}
                                updateLogHandler={props.updateLogHandler}
                                previous={props.previous}
                                next={props.next}
                                nextButtonHandler={props.nextButtonHandler}
                                previousButtonHandler={props.previousButtonHandler}
                                handleTextArea={props.handleTextArea}
                                log={props.log}
                                generateLogs={props.generateLogs}
                            />

                        ) : ( <div> </div> )
                    }
                </div>
            )}
        </Timer>
    );
}


export default Phase;

Phase.propTypes = {
    currentPhase :  PropTypes.string,
    phase : PropTypes.object,
    index: PropTypes.string,
    log: PropTypes.string,
    previous: PropTypes.bool,
    next: PropTypes.bool,
    compassButtonHandler: PropTypes.func,
    updateLogHandler: PropTypes.func,
    nextButtonHandler: PropTypes.func,
    previousButtonHandler: PropTypes.func,
    handleTextArea: PropTypes.func,
    adjustTime: PropTypes.func,
    generateLogs: PropTypes.func
}