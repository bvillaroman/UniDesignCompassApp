import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { updateUser } from '../state/actions'
import { getUser } from "../graphql_utils/utils"
import { connect } from 'react-redux';
// import Compass from "../components/Compass"
import ProcessFeed from "../components/ListProcesses/ProcessFeed"

class Dashboard extends Component {
  state = {
    compasses: [],
    currentCompass: {},
  }

  componentDidMount(){
      if (this.props.user.id){
        getUser(this.props.user.id)
          .then((res) => {
              const compasses = res.data.getUser.processes.items;
              const currentCompass = this.props.context ? this.props.context : compasses[0]
              this.setState({ compasses, currentCompass })
          })
          .catch( err => {
              alert(`there was an error with fetching your compass, we are showing you a default compass template: ${err}`)
              this.setState({
                compasses: [],
                currentCompass: {},
              })
          })
      } else {
        this.setState({
          compasses: [],
          currentCompass: {},
        })
      }
  }

  render() {
    // const { compasses } = this.state;
    const processes = this.state.compasses;
    return (
      <Layout>
        <div className='container'>
          { 
            processes.length > 0 ? <ProcessFeed processes={processes} />
            :(<span>You have not created any Processes!</span>)
          }
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
