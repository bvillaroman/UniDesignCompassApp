import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import Layout from "../components/layout";

class Profile extends React.Component {

  state = {

  }

  componentDidMount() {

  }


  render() {

    return (
      <Layout>
        <Tabs defaultActiveKey="projects" transitions={true} style={{width:100 + "%"}}>
          <Tab eventKey="projects" title="Projects">
            <h2 className="text-center">Compass</h2>
          
          </Tab>
          <Tab eventKey="settings" title="Analytics">
            <h2 className="text-center">Analytics</h2>
            
          </Tab>
        </Tabs>
      </Layout>
    );
  }
}

export default Profile;
