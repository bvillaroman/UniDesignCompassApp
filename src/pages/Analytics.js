import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Vega from 'react-vega';

import Layout from "../components/layout"
import { Button } from "react-bootstrap";
import BarChart from "./BarChart";

class Analytics extends Component {
    constructor(props) {
        super(props);
    }
    
    handleHover(...args){
    console.log(args);
    }
        
    render() {
        console.log(this.state);
        return (
            <Layout>
                <div className='container'>
                    {/* <Vega spec={this.state.spec} data={this.state.data} /> */}
                    <BarChart data={this.data} />
                    <Button onClick={this.chartButtonHandler}>ok</Button>
                </div>
            </Layout>
        );
    }

    chartButtonHandler = () => {
        console.log("handlinng");
    }

    data = [
        {
          "name": "table",
          "values": [
            {"category": "A", "amount": 28},
            {"category": "B", "amount": 55},
            {"category": "C", "amount": 43},
            {"category": "D", "amount": 91},
            {"category": "E", "amount": 81},
            {"category": "F", "amount": 53},
            {"category": "G", "amount": 19},
            {"category": "H", "amount": 87}
          ]
        }
    ]
}

export default Analytics;
