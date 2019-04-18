import React from "react";
import { store } from '../state/store';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Layout from "../components/layout";

class Analysis React.Component {
//store.getState().Render.aws_user
  constructor(props) {
    super(props);
    this.state = {
      projectId: "";
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


      </Layout>
    );
  }
}

export default Analysis;
