import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import "../components/bootstrap.css"
import { Row, ButtonGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import Compass from '../pages/Compass';
import { log_list } from '../dummyData';
import { render } from 'react-testing-library';


 const generateList=(phase)=> {
        if (Compass.currentPhase === phase) {
            const filtered = log_list.data.filter((entry) => {
                return (entry.id === phase);
            })
            return (filtered.map((data) => {
                return (<h4>{data.text}</h4>);
            }));
        }
    }

const Phase=(props)=> {
    console.log(props)
    return ( 
    <div>
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
                                     key={props.phase.key}
                                     onClick={() => {
                                          props.compassButtonHandler(props.phase);
                                          (getTimerState() === "PLAYING") ? pause() : start()
                                      }}
                                      bsSize='large'
                                      block
                                      className='text-left col-10'
                                     //  variant={(this.state.currentPhase === props.key) ? "success" : "outline-warning"}
                                     variant={(props.currentPhase === props.phase.key) ? "success" : "outline-warning"}

                                  >
                                      {props.phase.name}
                                  </Button>


                                  <Button
                                      className='col-2'
                                     variant={(props.currentPhase === props.phase.key) ? "danger" : "outline-primary"}
                                     onClick={() => {
                                         props.compassButtonHandler(props.phase);
                                         (getTimerState() === "PLAYING") ? pause() : start()
                                     }}
                                 >
                                     {(props.currentPhase === props.phase.key) ? console.log() : (pause())}
                                     <Timer.Hours />:
                                     <Timer.Minutes />:
                                     <Timer.Seconds />
                                 </Button>
                             </ButtonGroup>
                             <div>
                                 {/* {generateList(props.key)} */}
                             </div>
                             {(props.currentPhase === props.phase.key) ? (
                                 <div>
                                     <br></br>
                                     <Row>
                                         <Col>
                                             <Button
                                                 className='float-left'
                                                 variant={props.previous ? "primary" : "secondary"}
                                                 onClick={() => props.previousButtonHandler()}
                                                 active>Previous
                                             </Button>
                                         </Col>
                                         <Col>
                                             <textarea
                                                 placeholder="Log Text"
                                                 rows="5"
                                                 cols="20"
                                                 value={props.log}
                                                 onChange={props.handleTextArea}
                                             >
                                             </textarea>
                                         </Col>
                                         <Col>
                                             <Button
                                                 className='float-right'
                                                 variant={props.next ? "primary" : "secondary"}
                                                 onClick={(e) => props.nextButtonHandler()}
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
                                                 onClick={(e) => props.updateLogHandler()}
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
    
    // <div></div>
    );


}

 export default Phase