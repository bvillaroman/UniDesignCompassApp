import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import Layout from "../components/layout";
import  {connect} from "react-redux";
import {authenticateUser} from "../state/actions";
import Accordion from '../components/Accordion/accordion';

class Profile extends React.Component {
  constructor() {
    super();
    //initial state
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      processes: [],
      username: "",
      open: false
    }
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    // load data of user and set to state
    const { first_name, last_name, email, phone_number, processes, username } = this.props.user;
    this.setState({first_name, last_name, email, phone_number, processes, username});
  }

  toggle() {
   this.setState({
     open: !this.state.open
   });
 }

  render() {
    const { first_name, last_name, email, phone_number, username } = this.state;
    var displayProcesses = (this.state.processes === null) ?
      ( <span>There are no projects.</span> ) : ( <span>There are projects.</span> );
    return (
      <Layout>
        {console.log(this.props)}
        <Tabs defailtActiveKey="projects" transitions={false} style={{width:100 + "%"}}>
          <Tab eventKey="projects" title="Projects">
            <h2 className="text-center">Projects</h2>
            {displayProcesses}
          </Tab>
          <Tab eventKey="settings" title="Settings">
            <h2 className="text-center">General Account Settings</h2>
            <div id="account-settings" className="container">

              <div>
                <Accordion>
                  <div label="Name" change={`${first_name} ${last_name}`}>
                    <form>
                      First Name: <input className="col input-text" type="text" name="firstName" defaultValue={first_name} />
                      Last Name: <input className="col input-text" type="text" name="lastName" defaultValue={last_name} />
                    <input class="submit" value="Submit Changes" type="button"/>
                    <input class="cancel" value="Cancel" type="button"/>
                    </form>
                  </div>
                  <div label="Username" change={username}>
                    <form>
                      Username: <input className="col input-text" type="text" name="username" defaultValue={username} />
                      <input class="submit" value="Submit Changes" type="button"/>
                      <input class="cancel" value="Cancel" type="button"/>
                    </form>
                  </div>
                  <div label="E-Mail" change={email}>
                    <form>
                      E-Mail: <input className="col input-text" type="text" name="email" defaultValue={email} />
                      <input class="submit" value="Submit Changes" type="button"/>
                      <input class="cancel" value="Cancel" type="button"/>
                    </form>
                  </div>
                  <div label="Password" change="**********">
                    <form>
                      Current Password: <input className="col input-text" type="text" name="password" defaultValue="" />
                      New Password: <input className="col input-text" type="text" name="password" defaultValue="" />
                      <input class="submit" value="Submit Changes" type="button"/>
                      <input class="cancel" value="Cancel" type="button"/>
                    </form>
                  </div>
                  <div label="Phone Number" change={phone_number}>
                    <form>
                      Phone Number: <input className="col input-text" type="text" name="email" defaultValue={phone_number} />
                      <input class="submit" value="Submit Changes" type="button"/>
                      <input class="cancel" value="Cancel" type="button"/>
                    </form>
                  </div>
                </Accordion>
              </div>
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
