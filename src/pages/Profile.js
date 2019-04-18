import React from "react";
import { store } from '../state/store';
import { Tab, Tabs } from 'react-bootstrap';
import Layout from "../components/layout";

class Profile extends React.Component {
//store.getState().Render.aws_user
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }
  componentDidMount() {
    // load data of user and set to state
    this.setState({user: store.getState().Reducer.aws_user});
    //console.log(this.state);
  }
  render() {
    return (
      <Layout>
        <Tabs defailtActiveKey="projects" transitions={false} style={{width:100 + "%"}}>
          <Tab eventKey="projects" title="Projects">
            <h2 className="text-center">Projects</h2>
          </Tab>
          <Tab eventKey="settings" title="Settings">
            <h2 className="text-center">General Account Settings</h2>
            <div className="container">
              <a role="button">
                <h3 className="label">Name</h3>
                <span>{/*this.state.user.name*/}</span>
              </a>
              <a>
                <h3 className="label">E-mail</h3>
                <span>{/*this.state.user.email*/}</span>
              </a>
              <a>
                <h3 className="label">Password</h3>
                <span>**********</span>
              </a>
              <a>
                <h3 className="label">Phone number</h3>
                <span>{/*this.state.user.number*/}</span>
              </a>
          </div>
          </Tab>
        </Tabs>
      </Layout>
    );
  }
}

export default Profile;
