import React, { Component } from "react";
import BarChart from "./BarChart";
import { SizeMe } from 'react-sizeme'

class ResponsiveBarChart extends Component {
    render() { return (
        <SizeMe render={({ size }) => 
            <div>
                <BarChart width={size.width} height={size.width*2/3} data={this.props.data}/>
            </div>
        }/>
    )}
}

export default ResponsiveBarChart;