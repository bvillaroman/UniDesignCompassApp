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

    spec = {
        "$schema": "https://vega.github.io/schema/vega/v5.json",
        
        "padding": "20",
        "width": "300",
        "height": "300",
        "autosize": {
            "type": "pad",
            "contains": "content",
            "resize": true
        },
      
        "data": [{ "name": "table" }],
      
        "signals": [
          {
            "name": "tooltip",
            "value": {},
            "on": [
              {"events": "rect:mouseover", "update": "datum"},
              {"events": "rect:mouseout",  "update": "{}"}
            ]
          },
        ],
      
        "scales": [
          {
            "name": "xscale",
            "type": "band",
            "domain": {"data": "table", "field": "category"},
            "range": "width",
            "padding": 0.05,
            "round": true
          },
          {
            "name": "yscale",
            "domain": {"data": "table", "field": "amount"},
            "nice": true,
            "range": "height"
          }
        ],
      
        "axes": [
          { "orient": "bottom", "scale": "xscale" },
          { "orient": "left", "scale": "yscale" }
        ],
      
        "marks": [
          {
            "type": "rect",
            "from": {"data":"table"},
            "encode": {
              "enter": {
                "x": {"scale": "xscale", "field": "category"},
                "width": {"scale": "xscale", "band": 1},
                "y": {"scale": "yscale", "field": "amount"},
                "y2": {"scale": "yscale", "value": 0}
              },
              "update": {
                "fill": {"value": "steelblue"}
              },
              "hover": {
                "fill": {"value": "red"}
              }
            }
          },
          {
            "type": "text",
            "encode": {
              "enter": {
                "align": {"value": "center"},
                "baseline": {"value": "bottom"},
                "fill": {"value": "#333"}
              },
              "update": {
                "x": {"scale": "xscale", "signal": "tooltip.category", "band": 0.5},
                "y": {"scale": "yscale", "signal": "tooltip.amount", "offset": -2},
                "text": {"signal": "tooltip.amount"},
                "fillOpacity": [
                  {"test": "datum === tooltip", "value": 0},
                  {"value": 1}
                ]
              }
            }
          }
        ]
    }
}

export default Analytics;
