import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { ButtonToolbar } from "react-bootstrap";

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
            ]
        }
    }

    compassButtonHandler = (phase) => {
        console.log(phase);
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
                        <Button variant="primary" disabled>Primary</Button>
                        <Button className='float-right' variant="primary" disabled>Next</Button>
                    </div>
                </div>
         
            </Layout>
           
        );
    }
}

export default Compass;