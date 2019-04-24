import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import Layout from "../components/layout";
import  {connect} from "react-redux"
import {authenticateUser} from "../state/actions"
import {getUsersProjects} from '../graphql_utils/utils';
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
        <Tabs defailtActiveKey="projects" transitions={false} style={{width:100 + "%"}}>
          <Tab eventKey="projects" title="Projects">
            <h2 className="text-center">Projects</h2>
          </Tab>
          <Tab eventKey="settings" title="Settings">
            <h2 className="text-center">General Account Settings</h2>
            <div className="container">
                <h3 className="label">Name: </h3>
                <span>{`${first_name} ${last_name}`}</span>
                            
                <h3 className="label">Username</h3>
                <span>{username}</span>
              
                <h3 className="label">E-mail</h3>
                <span>{email}</span>
              
                <h3 className="label">Password</h3>
                <span>**********</span>
              
                <h3 className="label">Phone number</h3>
                <span>{phone_number}</span>   
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


