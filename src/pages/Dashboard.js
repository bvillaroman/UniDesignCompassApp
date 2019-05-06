import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { updateUser } from '../state/actions'
import { getUser } from "../graphql_utils/utils"
import { connect } from 'react-redux';

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

  render() {
    return (
      <Layout>
        <div className='container'>
          {this.state.currentCompass.name}
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
