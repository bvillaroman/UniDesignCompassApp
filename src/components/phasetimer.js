import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import "../components/bootstrap.css"
import { Row, ButtonGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import Compass from '../pages/Compass'



const PhaseTimer=(props)=> {

    return ( <div>
         <Timer
             initialTime={props.time}
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
                                     key={props.key}
                                     onClick={() => {
                                         this.compassButtonHandler(props);
                                         (getTimerState() === "PLAYING") ? pause() : start()
                                     }}
                                     bsSize='large'
                                     block
                                     className='text-left col-10'
                                     variant={(Compass.state.currentPhase === props.key) ? "success" : "outline-warning"}
                                 >
                                     {props.name}
                                 </Button>

                                 <Button
                                     className='col-2'
                                     variant={(this.state.currentPhase === props.key) ? "danger" : "outline-primary"}
                                     onClick={() => {
                                         this.compassButtonHandler(props);
                                         (getTimerState() === "PLAYING") ? pause() : start()
                                     }}
                                 >
                                     {(this.state.currentPhase === props.key) ? console.log() : (pause())}
                                     <Timer.Hours />:
                                     <Timer.Minutes />:
                                     <Timer.Seconds />
                                 </Button>
                             </ButtonGroup>
                             <div>
                                 {this.generateList(props.key)}
                             </div>
                             {(this.state.currentPhase === props.key) ? (
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
     </div>);

 }

 export default PhaseTimer