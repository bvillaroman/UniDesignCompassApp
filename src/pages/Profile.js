import React from "react";
import { Tab, Tabs, CardColumns, Card } from 'react-bootstrap';
import Layout from "../components/layout";
import  {connect} from "react-redux";
import {authenticateUser} from "../state/actions";
import Accordion from '../components/Accordion/accordion';
import {updateUser} from '../graphql_utils/utils';

class Profile extends React.Component {
  constructor() {
    super();
    //initial state
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      processes: {
        items: [],
        nextToken: null
      },
      username: "",
      update: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        username: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // load data of user and set to state
    const { first_name, last_name, email, phone_number, processes, username } = this.props.user;
    this.setState({first_name, last_name, email, phone_number, processes, username});
    this.setState({
      update: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        username: username
      }
    })
  }

  handleChange = (event) => {
    let update = Object.assign({}, this.state.update);
    update[event.target.name] = event.target.value;
    this.setState({ update });
  }

  submitName = () => {
    if ((this.state.update.first_name !== this.state.first_name) ||
        (this.state.update.last_name !== this.state.last_name)) {
      updateUser({
        id: this.props.user.id,
        first_name: this.state.update.first_name,
        last_name: this.state.update.last_name
      });
    }
    // .then(res => {
    //   console.log(res);
    // });
  }

  render() {
    const { first_name, last_name, email, phone_number, username } = this.props.user;
    var displayTitle = this.state.processes.items.map(item => {
      return (
        <Card>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
              <a href="#" className="card-link">Compass Link</a>
              <a href="#" className="card-link">Analytics Link</a>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated {item.date_end}</small>
          </Card.Footer>
        </Card>
      );
    });

    var displayProcesses = (this.state.processes === null) ?
      ( <span>There are no projects.</span> ) : <CardColumns>{displayTitle}</CardColumns>;

    return (
      <Layout>
        <Tabs defaultActiveKey="projects" transitions={false} style={{width:100 + "%"}}>
          <Tab eventKey="projects" title="Projects">
            <h2 className="text-center">Projects</h2>
            <div id="processes" className="container">
              {displayProcesses}
            </div>
          </Tab>
          <Tab eventKey="settings" title="Settings">
            <h2 className="text-center">General Account Settings</h2>
            <div id="account-settings" className="container">
              <Accordion>
                <div label="Name" change={`${first_name} ${last_name}`}>
                  <form>
                    First Name:
                    <input className="col input-text" type="text" name="first_name" defaultValue={first_name} onChange={this.handleChange}/>
                    Last Name:
                    <input className="col input-text" type="text" name="last_name" defaultValue={last_name} onChange={this.handleChange}/>
                  </form>
                  <input class="submit" value="Submit Changes" type="button" onClick={this.submitName}/>
                </div>
                <div label="Username" change={username}>
                  <form>
                    Username:
                    <input className="col input-text" type="text" name="username" defaultValue={username} onChange={this.handleChange} />
                  </form>
                  <input class="submit" value="Submit Changes" type="button"/>
                </div>
                <div label="E-Mail" change={email}>
                  <form>
                    E-Mail:
                    <input className="col input-text" type="text" name="email" defaultValue={email} onChange={this.handleChange}/>
                  </form>
                  <input class="submit" value="Submit Changes" type="button"/>
                </div>
                <div label="Password" change="**********">
                  <form>
                    Current Password:
                    <input className="col input-text" type="text" name="password" defaultValue="" />
                    New Password:
                    <input className="col input-text" type="text" name="password" defaultValue="" />
                  </form>
                  <input class="submit" value="Submit Changes" type="button"/>
                </div>
                <div label="Phone Number" change={phone_number}>
                  <form>
                    Phone Number:
                    <input className="col input-text" type="text" name="phone_number" defaultValue={phone_number} onChange={this.handleChange}/>
                  </form>
                  <input class="submit" value="Submit Changes" type="button"/>
                </div>
              </Accordion>
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
