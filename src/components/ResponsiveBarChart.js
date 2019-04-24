import React, { Component } from "react";
import BarChart from "./BarChart";

class ResponsiveBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spec: props.spec ? props.spec : null,
            data: props.data
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data ? nextProps.data : this.state.data
        })
    }

    onSize = size => {
        console.log(size)
        this.setState({
            width: size.width,
            height: size.height ? size.height : size.width*2/3
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