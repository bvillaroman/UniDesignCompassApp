import React from "react";
import { Tab, Nav } from 'react-bootstrap';
import Layout from "../components/layout";
import {getProcess} from "../graphql_utils/utils" 
import Graph from "../components/Graph";
import Compass from "../components/Compass"
import "../components/bootstrap.css"

class Process extends React.Component {

  state = {        
    date_end: "",
    date_start: "",
    id: "",
    name: "",
    phases: [],
  }

  componentDidMount() {
    const id = this.props.location.pathname.replace(process.env.PROCESS_LINK,"")
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

  updateHandler = () => {
    console.log('updatehandler')
    this.setState({updateCount : this.state.updateCount+1})
  }

  render() {
    const { name,id } = this.state;
    console.log(id)
    return (
      <Layout>
        <h2 className="text-center">{name}</h2>
        <Tab.Container id="left-tabs-example" defaultActiveKey="compass">
          <Nav variant="pills" defaultActiveKey="compass" className="process-tabs">
            <Nav.Item className="tab">
              <Nav.Link eventKey="compass">Compass</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab">
              <Nav.Link eventKey="analytics">Analytics</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="compass">
              {id && <Compass key={this.state.updateCount} id={id} onUpdate={this.updateHandler}/>}
            </Tab.Pane>
            <Tab.Pane eventKey="analytics">
              {id && <Graph key={this.state.updateCount} processId={id} onUpdate={this.updateHandler}/>}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Layout>
    );
  }
}

export default Process;
