import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { updateUser } from '../state/actions'
import { getUser } from "../graphql_utils/utils"
import { connect } from 'react-redux';
import Compass from "../components/Compass"
import CompassFeed from "../components/ListCompasses/CompassFeed"

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
              alert("there was an error with fetching your compass, we are showing you a default compass template")
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

  loadCompass = (compass) => {
    const { name, phaseids, id } = compass;
    
    return (<Compass compassName={name} phases={phaseids} id={id}/>)

  }

  render() {
    const { currentCompass,compasses } = this.state;
    return (
      <Layout>
        <div className='container'>
          <CompassFeed compasses={compasses} />
          {this.loadCompass(currentCompass)}
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
