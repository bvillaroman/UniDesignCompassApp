import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { Row, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import {Col} from "react-bootstrap";

class Compass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            compassName: "Universal Design Compass",
            compassPhases: [
                {key: '1', name:'A. Define Problem', icon:'', description: '', link: '#'},
                {key: '2', name:'B. Research', icon:'', description: '', link: '#'},
                {key: '3', name:'C. Brainstorm', icon:'', description: '', link: '#'},
                {key: '4', name:'D. Select', icon:'', description: '', link: '#'},
                {key: '5', name:'E. Construct', icon:'', description: '', link: '#'},
                {key: '6', name:'F. Evaluate', icon:'', description: '', link: '#'},
                {key: '7', name:'G. Communicate', icon:'', description: '', link: '#'},
                {key: '8', name:'H. Redisign', icon:'', description: '', link: '#'},
            ],
            previous:true,
            next:true,
            currentPhase:'0',
            emptyTime:"00:00:00",
            currentTime: " "
        }
    }

    compassButtonHandler = (phase) => {//handle current phase too.
        // var temp=phase.key
        this.setState({currentPhase:phase.key})// Some sort of delay when logging maybe also delay in updating?
        // console.log(this.state.currentPhase)
    }

    previousButtonHandler = () => {
        var temp=!this.state.previous//need to handle active and disabled booleans too
        this.setState({previous:temp});
    }


    nextButtonHandler = (e) => {
        var temp=!this.state.next//need to handle active and disabled booleans too
        this.setState({next:temp});
    }

    updateLogHandler = () =>{
        console.log('Success');
    } 

    timerHandler = (phase)=>{
        (phase.key==this.state.currentPhase)?console.log("Timer "+phase.key):console.log("Current Phase: "+this.state.currentPhase +" Not Phase (Clicked) "+phase.key)
        var start = new Date()
        var startMinutes= start.getMinutes();
        var startSeconds= start.getSeconds();
        var startMilliseconds= start.getUTCMilliseconds();
        var temp = startMinutes.toString()+":"+startSeconds.toString()+":"+startMilliseconds.toString()
        // console.log(minutes)
        this.setState({currentTime:temp})
        while(){//Set Condition for updating the time.
        var elapsed= new Date()
        var elapsedMinutes= elapsed.getMinutes();
        var elapsedSeconds= elapsed.getSeconds();
        var elapsedMilliseconds= elapsed.getUTCMilliseconds();
        var temp = elapsedMinutes.toString()+":"+elapsedSeconds.toString()+":"+elapsedMilliseconds.toString()
        console.log(temp)
        }
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
                                        <div className="d-flex flex-column" >
                                            <ButtonGroup size="lg">
                                        <Button 
                                            key={phase.key} 
                                            onClick={() => this.compassButtonHandler(phase)} 
                                            bsSize='large' 
                                            block 
                                            className='text-left'
                                            variant={(this.state.currentPhase==phase.key)?"success":"outline-warning"}
                                            >{phase.name}
                                        </Button>
                                        <Button
                                        variant={(this.state.currentPhase==phase.key)?"danger":"outline-primary"}
                                        onClick={()=>this.timerHandler(phase)}
                                        >
                                        {(this.state.currentPhase==phase.key)?this.state.currentTime:this.state.emptyTime}
                                        </Button>
                                        </ButtonGroup>
                                        </div>
                                    );
                                })
                        }
                        <br></br>
                        <div>
                            <Row>
                                <Col>
                        <Button 
                            className='float-left' 
                            variant={this.state.previous?"primary":"secondary"}
                            onClick={()=>this.previousButtonHandler()}
                            active>Previous
                        </Button>
                        </Col>
                        <Col>
                        <textarea 
                        placeholder="Log Text"
                        rows="5"
                        cols="20"
                        > 

                        </textarea>
                        </Col>
                        <Col>
                        <Button 
                            className='float-right' 
                            variant={this.state.next?"primary":"secondary"}
                            onClick={(e)=>this.nextButtonHandler()} 
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
                    </div>
                </div>
                </div>
         
            </Layout>
           
        );
    }
}

export default Compass;