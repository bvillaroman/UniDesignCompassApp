import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import {  ButtonGroup } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import "../bootstrap.css"
import PropTypes from "prop-types"
import LogHandler from "./LogHandler"
import {getPhase} from "../../graphql_utils/utils"

class Phase extends Component {

    state = {
        logs: [],
        time: "",
        title: "",
        description: "",
    }

    componentDidMount(){
        getPhase(this.props.phaseid).then((res) => {
            const Phase = res.data.getPhase
            this.setState({
                time : Phase.duration,
                logs : Phase.logs.items,
                title: Phase.title,
                description: Phase.description
            })
        })
    }
    timeHandler = (timerState,pause,newTime,start) => {
        const {props} = this;

        props.compassButtonHandler(props.phase);
        if(timerState=== "PLAYING") {
            pause(); 
            props.adjustTime(props.index, newTime);
        } else {
            start()
        }
    }

    render() {
        const { props } = this;
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
        )
    }
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