/**
 * @fileoverview Thise Files handles how a phase functions.
 * @author <a href="">Jeter Gutierrez</a>
 * @version 1.0.0
 */



import React from 'react'
import {Component} from 'react';
import Button from "react-bootstrap/Button";
import {  ButtonGroup, Row, Col } from 'react-bootstrap';
<<<<<<< HEAD
import Timer from 'react-compound-timer'
=======
import Timer from 'react-compound-timer';
>>>>>>> upstream/master
import "../bootstrap.css"
import PropTypes from "prop-types"
import LogHandler from "./LogHandler"
import {getPhase, createLogs,updatePhase} from "../../graphql_utils/utils"

/**
 * Component that handles the phase design and functionality
 */

class Phase extends Component {
constructor(props){
    super(props)
    this.state = {
        logs: [],
        newLog : "",
        time: 0,
        title: "",
        description: "",
        dataLoaded: false
    }
}
    componentDidMount(){
        this.update_state_phase();
    }
    update_state_phase=async()=>{
        getPhase(this.props.phaseid).then((res) => {
            const Phase = res.data.getPhase
            const logs = this.generateLogs(Phase.logs.items)
            this.setState({
                time: parseInt(Phase.duration),
                logs,
                title: Phase.title,
                description: Phase.description,
                dataLoaded: true
            })
        })
    }
/**
 * Component that handles updating the previously used time.
 */
    updateTime = (newTime) => {
        const {title, description} = this.state
        const {phaseid } = this.props;

        updatePhase(phaseid,newTime,title,description).then((res) => {
            const time = parseInt(res.data.updatePhase.duration) > 0 ? parseInt(res.data.updatePhase.duration) : 0;
            this.setState({time})
        })
    }
/**
 * Component that handles the Timer.
 */
    timeHandler = (timerState,pause,newTime,start) => {
        const {compassButtonHandler, phase} = this.props;

        compassButtonHandler(phase);
        if(timerState === "PLAYING") {
            pause(); 
            this.updateTime(newTime)
        } else {
            start()
        }
    }

/**
 * Component that handles the text read from the user input for a log.
 */
    handleTextArea = (e) => {
        this.setState({newLog : e.target.value})
    }
/**
 * Component that handles submiting a new log entry for a given log.
 */
    submitLog = (e,time) => {
        const {newLog} = this.state
        // const now = new Date();
        // const timestamp = now.getTime() + (now.getTimezoneOffset() * 60000)
        const timestamp = Date.now();
        this.updateTime(time);
        createLogs(this.props.phaseid,timestamp,newLog)
        .then((res) => {
            const logs = this.state.logs
            logs.push(this.generateLog(res.data.createLog))
            this.setState({newLog: "", logs})
        })
    }
/**
 * Component that handles generating the new Log entry.
 */
//log.timestamp,log.id,log.text
    generateLog = (log) => {
        const newTime = new Date(parseInt(log.timestamp))
        const hour = newTime.getHours() > 12 ? newTime.getHours() - 12 : newTime.getHours()
        const M = newTime.getHours() > 12 ? 'PM' : 'AM'
        const parsedTime = `${hour}:${newTime.getMinutes()} ${M}`
        return (
        <Row key={log.id} className="log-cell">
            <Col xs={8} className="log-text">{log.text}</Col>
            <Col className="log-timeStamp">{parsedTime}</Col>
        </Row>
        )
    }
/**
 * Component that handles the generating all of the log entries up to the most current one.
 */
    generateLogs = (logs) => {
        logs.sort((a, b) => {
            return a.timestamp - b.timestamp;
        })
        return logs.map(log => this.generateLog(log))
    }

    render() {
        const { props } = this;
        return (
            <div>
            { this.state.dataLoaded && (<Timer
                initialTime={this.state.time}
                startImmediately={false}
            >
                {({ start, pause, stop, getTimerState, getTime }) => (
                    <div className="d-flex flex-column" >
                        <ButtonGroup size="lg">
                            <Button
                                key={props.phase.key}
                                onClick={() => {
                                    this.timeHandler(getTimerState(), () => {pause()}, getTime(),() => {start()});
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
                                    this.timeHandler(getTimerState(), () => {pause()}, getTime(),() => {start()});
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
                                    previous={props.previous}
                                    next={props.next}
                                    nextButtonHandler={props.nextButtonHandler}
                                    previousButtonHandler={props.previousButtonHandler}
                                    handleTextArea={this.handleTextArea}
                                    submitLog={this.submitLog}
                                    log={this.state.newLog}
                                    logs={this.state.logs}
                                    currentTime={getTime()}
                                />

                            ) : ( <div> </div> )
                        }
                    </div>
                )}
            </Timer>)}
            </div>
        )
    }
}


export default Phase;

Phase.propTypes = {
    currentPhase :  PropTypes.number,
    phase : PropTypes.object,
    index: PropTypes.string,
    previous: PropTypes.bool,
    next: PropTypes.bool,
    compassButtonHandler: PropTypes.func,
    nextButtonHandler: PropTypes.func,
    previousButtonHandler: PropTypes.func 
}