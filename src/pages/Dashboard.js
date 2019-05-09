import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { updateUser } from '../state/actions'
import { getUser } from "../graphql_utils/utils"
import { connect } from 'react-redux';
import Compass from "../components/Compass"
import ProcessFeed from "../components/ListProcesses/ProcessFeed"

class Dashboard extends Component {
  state = {
    processes: [],
    currentProcess: "",
  }

  componentDidMount(){
      if (this.props.user.id){
        getUser(this.props.user.id)
          .then((res) => {
              const processes = res.data.getUser.processes.items;
              const currentProcess = ""
              this.setState({ processes, currentProcess })
          })
          .catch( err => {
              alert(`there was an error with fetching your processes, we are showing you a default Process template: ${err}`)
              this.setState({
                processes: [],
                currentProcess: "",
              })
          })
      } else {
        this.setState({
          processes: [],
          currentProcess: "",
        })
      }
  }

  selectProcess = (currentProcess) => { this.setState({currentProcess}); console.log(currentProcess)}

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
