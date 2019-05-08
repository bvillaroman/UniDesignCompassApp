import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import Layout from "../components/layout";
import {getProcess} from "../graphql_utils/utils" 
import Graph from "../components/Graph";
import Compass from "../components/Compass"
import "../components/bootstrap.css"

class Profile extends React.Component {

  state = {        
    date_end: "",
    date_start: "",
    id: "",
    name: "",
    phases: [],
  }

  componentDidMount() {
    const { id } = this.props.pageContext;
    getProcess(id)
    .then((res) => {
      const {date_end, date_start, id, name, phaseids : { items }} = res.data.getProcess

      this.setState({
        date_end, 
        date_start, 
        id, 
        name, 
        phases: items
      })
    })
  }

  render() {
    const { name,id } = this.state;
    return (
      <Layout>
        <Tabs defaultActiveKey="projects" transitions="true" >
          <Tab eventKey="projects" title="Compass">
            <h2 className="text-center">{name}</h2>
          </Tab>
          <Tab eventKey="settings" title="Analytics">
            <h2 className="text-center">{name}</h2>
            {id && <Graph processId={id} />}
          </Tab>
        </Tabs>
      </Layout>
    );
  }
}

export default Profile;
