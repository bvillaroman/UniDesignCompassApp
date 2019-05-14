/**
 * @fileoverview The Dashboard page that shows all of the processes that a user has
 * @author Abraham Villaroman
 * @version 1.0.0
*/

import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { updateUser } from '../state/actions'
import { getUser } from "../graphql_utils/utils"
import { connect } from 'react-redux';
import Compass from "../components/Compass"
import ProcessFeed from "../components/ListProcesses/ProcessFeed"
import SpinningWheel from "../components/SpinningWheel"


/**
 * The page that handles the display of all user created processes
 * holds all the logic in retrieving the processes according tot he logged in user
*/
class Dashboard extends Component {
  state = {
    dashboardTitle: "",
    processes: [],
    currentProcess: "",
    loading: true
  }

  /**
   * make the api calls with the user id, if ther eis no userId then show nothing
   */
  componentDidMount(){
      if (this.props.user.id){ 
        this.getProcesses(this.props.user.id)
      } else {
        this.setState({
          processes: [],
          currentProcess: "",
          dashboardTitle: "You have no Processes!" 
        })
      }
  }
  /**
   * @param {string} string user id 
   * make the api call with the user id to get all the processes
   * when the data is fetched, change the state to show the processes,
   * if it isnt, then return an error message to the page
   */
  getProcesses = (id) => {
    this.setState({loading: true}, () => {
      getUser(id)
      .then((res) => {
          const processes = res.data.getUser.processes.items;
          const currentProcess = ""
          const dashboardTitle = processes.length > 0 ? "Processes" : "You have no Processes!"
          this.setState({ 
            processes, 
            currentProcess,
            loading: false, 
            dashboardTitle
          })
      })
      .catch( err => {
          this.setState({
            processes: [],
            currentProcess: "",
            loading: false,
            dashboardTitle: "There was an error with fetching your processes, please refresh the page. If it continues to persist please contact support"
          })
      })
    })
  }
  /**
   * @param {string} string current Process
   * select the current process that was clicked
   */
  selectProcess = (currentProcess) => { this.setState({currentProcess});}
  
  /**
   * handle the view of the page
   * if there is no selected process, show the feed, otherwise show the compass if the selected process
   */
  viewHandler = () => {
    const {processes,currentProcess} = this.state;
    const currentView = (processes.length > 0 && currentProcess.length > 0) ? (<Compass id={currentProcess}/>)
                      : (processes.length > 0 && currentProcess.length === 0) ? (<ProcessFeed processes={processes} selectProcess={this.selectProcess}/>)
                      : (<span>You have not created any Processes!</span>)
    return currentView
  }

  render() {
    return (
      <Layout>
        <div className='container'>
          <h2 className="text-center">{this.state.dashboardTitle}</h2>
          {this.viewHandler()}
          {this.state.loading && <SpinningWheel/>}
        </div>         
      </Layout>
    );
  }
}

const mapStateToProps = ({ state }) => ({
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
