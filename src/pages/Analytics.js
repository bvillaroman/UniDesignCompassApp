import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import Layout from "../components/layout";
import ResponsiveBarChart from '../components/ResponsiveBarChart';

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
        return (
            <Layout>
                <div className='container'>
                    <ResponsiveBarChart data={this.data}/>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Notes</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Define Problem</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Cras pulvinar mattis nunc sed blandit libero. Commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing elit.</td>
                      <td>12:00:00</td>
                    </tr>
                    <tr>
                      <td>Research</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Cras pulvinar mattis nunc sed blandit libero. Commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing elit.</td>
                      <td>12:00:00</td>
                    </tr>
                    <tr>
                      <td>Brainstorm</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Cras pulvinar mattis nunc sed blandit libero. Commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing elit.</td>
                      <td>12:00:00</td>
                    </tr>
                    <tr>
                      <td>Select</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Cras pulvinar mattis nunc sed blandit libero. Commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing elit.</td>
                      <td>12:00:00</td>
                    </tr>
                    <tr>
                      <td>Construct</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Cras pulvinar mattis nunc sed blandit libero. Commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing elit.</td>
                      <td>12:00:00</td>
                    </tr>
                    <tr>
                      <td>Evaluate</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Cras pulvinar mattis nunc sed blandit libero. Commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing elit.</td>
                      <td>12:00:</td>
                    </tr>
                    <tr>
                      <td>Communicate</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Cras pulvinar mattis nunc sed blandit libero. Commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing elit.</td>
                      <td>12:00:</td>
                    </tr>
                    <tr>
                      <td>Redesign</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Cras pulvinar mattis nunc sed blandit libero. Commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing elit.</td>
                      <td>12:00:00</td>
                    </tr>
                  </tbody>
                </Table>
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
