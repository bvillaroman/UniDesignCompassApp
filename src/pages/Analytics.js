import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Vega from 'react-vega';

import Layout from "../components/layout"
import { Button } from "react-bootstrap";
import { SizeMe } from 'react-sizeme'
import ResponsiveBarChart from "./ResponsiveBarChart";

class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spec: this.spec,
            chartData: this.data
        }
    }

    chartButtonHandler = () => {
        console.log("handlinng");
    }

    onSize = size => {
        console.log('MyComponent has a width of', size.width)
      }
        
    render() {
        console.log(this.state);
        return (
            <Layout>
                <div className='container'>
                    {/* <Vega spec={this.state.spec} data={this.state.chartData} />
                    <Button onClick={this.chartButtonHandler}>ok</Button> */}
                    <ResponsiveBarChart data={this.data}/>
                </div>
            </Layout>
        );
    }

    data = {
        table : [
            {"category": "A", "amount": 28},
            {"category": "B", "amount": 55},
            {"category": "C", "amount": 43},
            {"category": "D", "amount": 91},
            {"category": "E", "amount": 81},
            {"category": "F", "amount": 53},
            {"category": "G", "amount": 19},
            {"category": "H", "amount": 87},
            {"category": "I", "amount": 23}
        ]
    }
}

export default Analytics;
