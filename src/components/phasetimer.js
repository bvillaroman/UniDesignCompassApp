import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import "../components/bootstrap.css"
import { Row, ButtonGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import Compass from './Compass';
import { log_list } from '../dummyData';
// import { render } from 'react-testing-library';

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

const PhaseTimer=(props)=> {
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
                                     key={props.keys}
                                     onClick={() => {
                                          Compass.compassButtonHandler(props);
                                          (getTimerState() === "PLAYING") ? pause() : start()
                                      }}
                                      bsSize='large'
                                      block
                                      className='text-left col-10'
                                     //  variant={(this.state.currentPhase === props.key) ? "success" : "outline-warning"}
                                     variant={(props.currentPhase === props.keys) ? "success" : "outline-warning"}

                                  >
                                      {props.name}
                                  </Button>


                                  <Button
                                      className='col-2'
                                     variant={(props.currentPhase === props.keys) ? "danger" : "outline-primary"}
                                     onClick={() => {
                                         Compass.compassButtonHandler(props);
                                         (getTimerState() === "PLAYING") ? pause() : start()
                                     }}
                                 >
                                     {(props.currentPhase === props.keys) ? console.log() : (pause())}
                                     <Timer.Hours />:
                                     <Timer.Minutes />:
                                     <Timer.Seconds />
                                 </Button>
                             </ButtonGroup>
                             <div>
                                 {/* {generateList(props.key)} */}
                             </div>
                             {(props.currentPhase === props.keys) ? (
                                 <div>
                                     <br></br>
                                     <Row>
                                         <Col>
                                             <Button
                                                 className='float-left'
                                                 variant={Compass.previous ? "primary" : "secondary"}
                                                 onClick={() => Compass.previousButtonHandler()}
                                                 active>Previous
                                             </Button>
                                         </Col>
                                         <Col>
                                             <textarea
                                                 placeholder="Log Text"
                                                 rows="5"
                                                 cols="20"
                                                 value={Compass.log}
                                                 onChange={Compass.handleTextArea}
                                             >
                                             </textarea>
                                         </Col>
                                         <Col>
                                             <Button
                                                 className='float-right'
                                                 variant={Compass.next ? "primary" : "secondary"}
                                                 onClick={(e) => Compass.nextButtonHandler()}
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
                                                 onClick={(e) => Compass.updateLogHandler()}
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

 export default PhaseTimer