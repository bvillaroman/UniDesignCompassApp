import React, { Component } from "react";
import Layout from "../components/layout"
import ResponsiveBarChart from '../components/ResponsiveBarChart';
import  {connect} from "react-redux"
import {authenticateUser} from "../state/actions"
import * as Utils from '../graphql_utils/utils'
// import 'bootstrap/dist/css/bootstrap.min.css';

class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spec: this.spec,
            chartData: this.data
        };
    }

    initProcessSelect() {
        this.setState({
            loading: true
        });
        // load data of user and set to state
        const user = this.props.user;
        // console.log(user);

        const processes_promise = Utils.getUser(user.id).then(res => {
            let user = res.data.getUser;
            let processes_ids = user.processes;
            let promise = Promise.all(
                processes_ids.map((process_id, index) => {
                    return Utils.getProcess(process_id).then(res => {
                        let process = res.data.getProcess;
    
                        return {
                            name: process.name,
                            id: process.id
                        }
                    })
                })
            );

            return promise;
        });

        processes_promise.then((processes) => {
            this.setState({
                processes: processes,
                loading: false
            });
        });
    }

    componentDidMount() {
        // load data of user and set to state
        const user = this.props.user;
        
        this.initProcessSelect();
    }

    chartButtonHandler = () => {
        console.log("handlinng");
    }

    onSize = size => {
        console.log('MyComponent has a width of', size.width)
    }

    process_select_handler = (event) => {
        console.log(event.target.value)
    }

    process_select_render = () => {
        return(
            <div className="d-flex flex-column" >
                <select className={'custom-select'} onChange={e => this.process_select_handler(e)}>
                    {this.state.processes 
                        ? 
                            this.state.processes.map((process, index) => {
                                return (
                                    <option value={process.id}>{process.name}</option>
                                )
                            })
                        : 
                            <option disabled selected>This user has no Processes</option>
                    }
                </select>
            </div>
        );
    }

    bar_chart_render = () => {
        const d = null
        const chart = d
            ?
                <ResponsiveBarChart data={d}/>
            :
                null;
        return chart;
    }

    loading_render = () => {
        return (this.state.loading
            ?   
                <div className={'text-center'}>
                    <div className={'spinner-border text-primary'}></div>
                </div>
            :
                null
        );
    }
        
    render() {
        console.log(this.state)
        return (
            <Layout>
                <div className='container'>
                    <div className={'page-header'}>
                        <h1 className={'text-center'}>Anlytics</h1>
                    </div>
                        {this.loading_render()}
                        {this.process_select_render()}
                        {this.bar_chart_render()}
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
