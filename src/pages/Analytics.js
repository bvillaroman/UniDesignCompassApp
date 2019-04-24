import React, { Component } from "react";
import Layout from "../components/layout"
import ResponsiveBarChart from '../components/ResponsiveBarChart';
import  {connect} from "react-redux"
import {authenticateUser} from "../state/actions"
import * as Utils from '../graphql_utils/utils'

class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spec: this.spec,
            chartData: this.data
        }
    }

    componentDidMount() {
        // load data of user and set to state
        const user = this.props.user;
        // console.log(user);

        Utils.getUser(user.id).then(res => {
            let user = res.data.getUser
            let processes_ids = user.processes
            console.log(processes_ids)
            
            processes_ids.forEach(process_id => {
                Utils.getProcess(process_id).then(res => {
                    console.log(res.data.getProcess);
                })
            });
        })
    }

    chartButtonHandler = () => {
        console.log("handlinng");
    }

    onSize = size => {
        console.log('MyComponent has a width of', size.width)
      }
        
    render() {
        return (
            <Layout>
                <div className='container'>
                    <ResponsiveBarChart data={this.data}/>
                </div>
            </Layout>
        );
    }

    data = {
        table : [
            {"category": "A", "amount": 28},
            {"category": "B", "amount": 55},
            {"category": "C", "amount": 43},
            {"category": "D", "amount": 91},
            {"category": "E", "amount": 81},
            {"category": "F", "amount": 53},
            {"category": "G", "amount": 19},
            {"category": "H", "amount": 87},
            {"category": "I", "amount": 23}
        ]
    }
}

const mapStateToProps = ({state}) => ({ 
    isAuthenticated: state.isAuthenticated, 
    user: state.user 
}) 
const mapDispatchToProps = dispatch => ({
authenticateUser: (auth) => dispatch(authenticateUser(auth))
})

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
