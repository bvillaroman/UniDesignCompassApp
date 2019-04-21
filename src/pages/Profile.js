import React from "react";
import { Tab, Tabs, Row } from 'react-bootstrap';
import Layout from "../components/layout";
import  {connect} from "react-redux"
import {authenticateUser} from "../state/actions"

class Profile extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    processes: [],
    username: ""
  }

  componentDidMount() {
    // load data of user and set to state
    const { first_name, last_name, email, phone_number, username} = this.props.user;
    this.setState({first_name, last_name, email, phone_number, username});
  }
  render() {
    const { first_name, last_name, email, phone_number, username} = this.state;
    return (
      <Layout>
        {console.log(this.props.user)}
        <Tabs defailtActiveKey="projects" transitions={false} style={{width:100 + "%"}}>
          <Tab eventKey="projects" title="Projects">
            <h2 className="text-center">Projects</h2>
          </Tab>
          <Tab eventKey="settings" title="Settings">
            <h2 className="text-center">General Account Settings</h2>
            <div id="account-settings" className="container">
              <a>
              <Row>
                <div class="col-3">
                  <h3 className="label">Name </h3>
                </div>
                <div class="col-6">
                  <span>{`${first_name} ${last_name}`}</span>
                </div>
                <div class="col">
                  <span>Edit</span>
                </div>
              </Row>
            </a>
              <Row>
                <div class="col-3">
                  <h3 className="label">Username</h3>
                </div>
                <div class="col-6">
                  <span>{username}</span>
                </div>
                <div class="col">
                  <span>Edit</span>
                </div>
              </Row>
              <Row>
                <div class="col-3">
                  <h3 className="label">E-mail</h3>
                </div>
                <div class="col-6">
                  <span>{email}</span>
                </div>
                <div class="col">
                  <span>Edit</span>
                </div>
              </Row>
              <Row>
                <div class="col-3">
                  <h3 className="label">Password</h3>
                </div>
                <div class="col-6">
                  <span>**********</span>
                </div>
                <div class="col">
                  <span>Edit</span>
                </div>
              </Row>
              <Row>
                <div class="col-3">
                  <h3 className="label">Phone Number</h3>
                </div>
                <div class="col-6">
                  <span>{phone_number}</span>
                </div>
                <div class="col">
                  <span>Edit</span>
                </div>
              </Row>
            </div>
          </Tab>
        </Tabs>
      </Layout>
    );
  }
}

const mapStateToProps = ({state}) => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  authenticateUser: (auth) => dispatch(authenticateUser(auth))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
