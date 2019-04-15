import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { Row } from "react-bootstrap";
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
        }
    }

    compassButtonHandler = (phase) => {
        console.log(phase);
    }

    previousButtonHandler = () => {
        var temp=!this.state.previous//need to handle active and disabled booleans too
        this.setState({previous:temp})
    }


    nextButtonHandler = (e) => {
        var temp=!this.state.next//need to handle active and disabled booleans too
        this.setState({next:temp})
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
                                        <Button 
                                            key={phase.key} 
                                            onClick={() => this.compassButtonHandler(phase)} 
                                            bsSize='large' 
                                            block 
                                            className='btn-outline-primary text-left'>
                                                {phase.name}
                                        </Button>
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
                    </div>
                </div>
                </div>
         
            </Layout>
           
        );
    }
}

export default Compass;