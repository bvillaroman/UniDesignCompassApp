import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Vega from 'react-vega';

import Layout from "../components/layout"
import { Button } from "react-bootstrap";

class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spec: {
                "width": 400,
                "height": 200,
                "data": [{ "name": "table" }],
                "signals": [
                  {
                    "name": "tooltip",
                    "value": {},
                    "on": [
                      {"events": "rect:mouseover", "update": "datum"},
                      {"events": "rect:mouseout",  "update": "{}"}
                    ]
                  }
                ],
                 // See the rest in demo/src/vega/spec1.js
            },
            barData: {
                table: [{"x": 1,  "y": 28}, {"x": 2,  "y": 55}]
            }
        }
    }
      
    handleHover(...args){
    console.log(args);
    }
        
    render() {
        return (
            <Layout>
                <div className='container'>
                    <Vega spec={this.state.spec} data={this.state.barData} />
                    <Button>ok</Button>
                </div>
            </Layout>
        );
    }
}

export default Analytics;
