import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { updateUser } from '../state/actions'
import { getUser } from "../graphql_utils/utils"
import { connect } from 'react-redux';
import Compass from "../components/Compass"
import ProcessFeed from "../components/ListProcesses/ProcessFeed"
import SpinningWheel from "../components/SpinningWheel"

class Dashboard extends Component {
  state = {
    processes: [],
    currentProcess: "",
    loading: true
  }

  componentDidMount(){
      if (this.props.user.id){ 
        this.getProcesses(this.props.user.id)
      } else {
        this.setState({
          processes: [],
          currentProcess: "",
        })
      }
  }

  getProcesses = (id) => {
    this.setState({loading: true}, () => {
      getUser(id)
      .then((res) => {
          const processes = res.data.getUser.processes.items;
          const currentProcess = ""
          this.setState({ processes, currentProcess,loading: false })
      })
      .catch( err => {
          alert(`there was an error with fetching your processes, Please refresh the page`)
          this.setState({
            processes: [],
            currentProcess: "",
            loading: false 
          })
      })
    })
  }

  selectProcess = (currentProcess) => { this.setState({currentProcess});}

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
          <h2 className="text-center">Processes</h2>
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
// export default Dashboard;
