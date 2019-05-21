/**
 * @fileoverview The Process page that shows the compass and the anayltics of a process
 * @author Abraham Villaroman
 * @version 1.0.0
*/
import React from "react";
import { Tab, Nav } from 'react-bootstrap';
import Layout from "../components/layout";
import {getProcess} from "../graphql_utils/utils" 
import Graph from "../components/Graph";
import Compass from "../components/Compass"
import "../components/bootstrap.css"

/**
 * The Component that handles the display/tabbing between Compass and AnalyticsPage
 * holds all the logic in retrieving the process according to proces id stored in the url
*/
export class Process extends React.Component {

  state = {        
    date_end: "",
    date_start: "",
    id: "",
    name: "",
    phases: [],
    updateComponent: ""
  }

  componentDidMount() {
    const id = this.props.location.pathname.replace(process.env.PROCESS_LINK,"").replace("/","")
    this.getProcessItems(id);
  }

  /**
   * @param {string} id of the process
   * makes an api request to retrieve all of the data of the process from the process ID
   * once the data is retrieved, change the state of the component
  */
  getProcessItems = (id) => {
    getProcess(id)
    .then((res) => {
      const {date_end, date_start, id, name, phaseids : { items }} = res.data.getProcess
      this.setState({
        date_end, 
        date_start, 
        id, 
        name, 
        phases: items,
        updateCount: 0
      })
    })
  }

  /**
   * @param {string} either "Compass" or "Graph", the components to refresh
   *  change the state of the component to refresh, when the person chooses a tab, the child component will make a new request to the api for the latest data
  */
  updateHandler = (updateComponent) => {
    this.setState({updateComponent})
  }

  render() {
    const { name,id } = this.state;
    return (
      <Layout>
        <h2 className="text-center">{name}</h2>
        <Tab.Container id="left-tabs-example" defaultActiveKey="compass">
          <Nav variant="pills" defaultActiveKey="compass" className="process-tabs">
            <Nav.Item className="tab">
              <Nav.Link eventKey="compass" onClick={()=>{ this.updateHandler("Compass")}}>Compass</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab">
              <Nav.Link eventKey="analytics" onClick={()=>{ this.updateHandler("Graph")}}>Analytics</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="compass">
              {id && <Compass id={id} updateHandler={this.updateHandler} updateComponent={this.state.updateComponent === "Compass"}/>}
            </Tab.Pane>
            <Tab.Pane eventKey="analytics">
              {id && <Graph processId={id} updateHandler={this.updateHandler} updateComponent={this.state.updateComponent === "Graph"}/>}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Layout>
    );
  }
}

export default Process;
