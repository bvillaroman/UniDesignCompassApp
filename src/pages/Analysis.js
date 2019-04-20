import React from "react";
import { store } from '../state/store';
import { Table } from 'react-bootstrap';
import Layout from "../components/layout";

class Analysis extends React.Component {
//store.getState().Render.aws_user
  constructor(props) {
    super(props);
    this.state = {
      projectId: ""
    }
  }
  componentDidMount() {
    // load data of project data and set to state
    // this.setState({user: store.getState().Reducer.aws_user});
    //console.log(this.state);
  }

  render() {
    return (
      <Layout>
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
}

export default Analysis;
