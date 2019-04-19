import React, { Component } from "react";
import Vega from 'react-vega';

import { Button } from "react-bootstrap";
import BarChart from "./BarChart";

class ResponsiveBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spec: props.spec ? props.spec : null,
            data: props.data
        }
    }

    onSize = size => {
        console.log('MyComponent has a width of', size.width)
      }
        
    render() {
        const spec = this.state.spec ? this.state.spec : null;
        return (
            <BarChart onSize={this.onSize} spec={spec} data={this.state.data}/>
        );
    }
}

export default ResponsiveBarChart;