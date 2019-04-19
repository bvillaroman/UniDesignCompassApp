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
        this.setState({
            width: size.width*5/5,
            height: size.width*2/3
        })
      }
        
    render() {
        const spec = this.state.spec ? this.state.spec : null;
        return (
            <div>
                <BarChart
                    onSize={this.onSize} 
                    spec={spec} 
                    width={this.state.width} 
                    height={this.state.height} 
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default ResponsiveBarChart;