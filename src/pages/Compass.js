import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { Row, ButtonGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports'; // specify the location of aws-exports.js file on your project
import {log_list} from '../dummyData';
import Timer from 'react-compound-timer';
import {updateUser} from '../state/actions'
import {getProcess} from "../graphql_utils/utils"
import {connect} from 'react-redux';

Amplify.configure(aws_exports);

class Compass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            compassName: "",
            compassPhases: [],
            previous: true,
            next: true,
            currentPhase: '',
            emptyTime: "",
            currentTime: "",
            log: ""
        }
    }

    componentDidMount(){
        const compassPhases = this.props.user.processes.items[0].id;
        getProcess(compassPhases)
        .then((res) => {
            const compass = res.data.getProcess;
            const compassName = compass.name;
            const compassPhases = res.data.getProcess.phaseids.items.map((phase,index) => {
                return { 
                    key: index + 1,  
                    name: phase.title, 
                    icon: '', 
                    description: phase.description, 
                    link: '#',
                    time: phase.duration
                }
            })
            this.setState({
                compassName,
                compassPhases,
                previous: true,
                next: true,
                currentPhase: '0',
                emptyTime: "00:00:00",
                currentTime: "00:00:00",
                log: ""
            })
        })
    }

    compassButtonHandler = (phase) => {//handle current phase too.
        this.setState({ currentPhase: phase.key })// Some sort of delay when logging maybe also delay in updating?
    }

    previousButtonHandler = () => {
        var temp = !this.state.previous//need to handle active and disabled booleans too
        this.setState({ previous: temp });
    }


    nextButtonHandler = (e) => {
        var temp = !this.state.next//need to handle active and disabled booleans too
        this.setState({ next: temp });
    }

    handleTextArea = (e) => {
        this.setState({ log: e.target.value })
    }

    updateLogHandler = (event) => {
        var x = new Date()
        var minutes = x.getMinutes();
        var seconds = x.getSeconds();
        var milliseconds = x.getMilliseconds();
        var temp = minutes.toString() + ":" + seconds.toString() + ":" + milliseconds.toString()
        const log = { id: this.state.currentPhase, timestamp: temp, text: this.state.log };
        log_list.data.push(log); // Temporary
        console.log(log_list.data); //Temporary
        this.forceUpdate();
        //API.graphql(graphqlOperation(createLog, { input: log })); //taken out temporarily!
    }

    adjustTime = (index, time) => {
        let compassPhase = this.state.compassPhases
        compassPhase[index].time = time
        this.setState({ compassPhase })
    }

    timerHandler = (phase) => {
        if (phase.key === this.state.currentPhase) {
            var x = new Date()
            var minutes = x.getMinutes()
            var seconds = x.getSeconds();
            var milliseconds = x.getMilliseconds();
            var temp = minutes.toString() + ":" + seconds.toString() + ":" + milliseconds.toString()
            this.setState({ currentTime: temp })
        }
        else {
            console.log("Current Phase: " + this.state.currentPhase + " Not Phase (Clicked) " + phase.key)
        }
    }
    generateList(phase) {
        if (this.state.currentPhase === phase) {
            const filtered = log_list.data.filter((entry) => {
                return (entry.id === phase);
            })
            return (filtered.map((data) => {
                return (<h4>{data.text}</h4>);
            }));
        }
    }

    Start = (start) => () => {
        console.log('My own function');
        start()
    }


    render() {
        return (
            <Layout>
                <div className='container'>
                    <h1 className='text-center'>{this.state.compassName}</h1>
                    <div>
                        {
                            this.state.compassPhases.map(
                                (phase, index) => {
                                    return (
                                        <div>
                                            <Timer
                                                // initialTime={this.state.compassPhases[index].time}
                                                initialTime={phase.time}
                                                startImmediately={false}
                                                OnStart={() => console.log('Start')}
                                                OnResume={() => console.log('Resume')}
                                                OnPause={() => console.log('Pause')}
                                                OnStop={() => console.log('Stop')}
                                                OnReset={() => console.log('Reset')}
                                            >
                                                {({ start, resume, pause, stop, reset, getTimerState, getTime }) => {
                                                    return (
                                                        <React.Fragment>
                                                            <div className="d-flex flex-column" >
                                                                <ButtonGroup size="lg">
                                                                    <Button
                                                                        key={phase.key}
                                                                        onClick={() => 
                                                                            {this.compassButtonHandler(phase);
                                                                            (getTimerState() === "PLAYING") ? pause() : start()
                                                                        }}
                                                                        bsSize='large'
                                                                        block
                                                                        className='text-left'
                                                                        variant={(this.state.currentPhase === phase.key) ? "success" : "outline-warning"}
                                                                    >
                                                                        {phase.name}
                                                                    </Button>

                                                                    <Button
                                                                        variant={(this.state.currentPhase === phase.key) ? "danger" : "outline-primary"}
                                                                        onClick={() => {
                                                                            this.compassButtonHandler(phase);
                                                                            (getTimerState() === "PLAYING") ? pause() : start()
                                                                        }}
                                                                    >
                                                                        {(this.state.currentPhase === phase.key) ? console.log() : (pause())}
                                                                        <Timer.Hours />:
                                                                        <Timer.Minutes />:
                                                                        <Timer.Seconds />
                                                                    </Button>
                                                                </ButtonGroup>
                                                                <div>
                                                                    {this.generateList(phase.key)}
                                                                </div>
                                                                {(this.state.currentPhase === phase.key) ? (
                                                                    <div>
                                                                        <br></br>
                                                                        <Row>
                                                                            <Col>
                                                                                <Button
                                                                                    className='float-left'
                                                                                    variant={this.state.previous ? "primary" : "secondary"}
                                                                                    onClick={() => this.previousButtonHandler()}
                                                                                    active>Previous
                                                                                 </Button>
                                                                            </Col>
                                                                            <Col>
                                                                                <textarea
                                                                                    placeholder="Log Text"
                                                                                    rows="5"
                                                                                    cols="20"
                                                                                    value={this.state.log}
                                                                                    onChange={this.handleTextArea}
                                                                                >
                                                                                </textarea>
                                                                            </Col>
                                                                            <Col>
                                                                                <Button
                                                                                    className='float-right'
                                                                                    variant={this.state.next ? "primary" : "secondary"}
                                                                                    onClick={(e) => this.nextButtonHandler()}
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
                                                                                    onClick={(e) => this.updateLogHandler()}
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
                                                        </React.Fragment>);
                                                }}

                                            </Timer>
                                        </div>
                                    );
                                })
                        }
                    </div>
                </div>

            </Layout>
        );
    }
}

const mapStateToProps = ({state}) => ({
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(Compass);

