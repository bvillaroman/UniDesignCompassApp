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
            chartData: this.data,
            selected_process_id: -1
        };
    }

    initProcessSelect() {
        this.setState({
            loading: true
        });
        // load data of user and set to state
        const user = this.props.user;
        // console.log(user);

        Utils.getUser(user.id).then(res => {
            const user = res.data.getUser;
            const processes_ids = user.processes;
            // retrieving the names of all the user's Processes
            return Promise.all(
                processes_ids.map((process_id, index) => {
                    return (
                        Utils.getProcess(process_id).then(res => {
                            const process = res.data.getProcess;
                            return {
                                name: process.name,
                                id: process.id
                            }
                        })
                    )
                })
            );
        }).then((processes) => {
            const default_process = processes[0]
            this.setState({
                processes: processes,
                selected_process_id: default_process ? default_process.id : -1,
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

    process_select_handler = (event) => {
        const process_id = event.target.value;
        console.log(process_id)
        this.setState({
            selected_process_id: process_id
        })
        this.load_process_data(process_id);
        // perhaps initiate the plot here
    }

    load_process_data(process_id) {
        this.setState({
            loading: true
        });

        Utils.getProcess(process_id).then(res => {
            const phase_ids = res.data.getProcess.phase_ids;
            console.log(phase_ids);
            const phase_id = phase_ids[0];
            Utils.getPhase(phase_id).then(res => {
                console.log(res)
                // duration is null ?
                this.setState({
                    loading: false
                });
            })
        })
    }

    process_select_render = () => {
        return(
            <div className="d-flex flex-column" >
                <select className={'custom-select'} value={this.state.selected_process_id} onChange={e => this.process_select_handler(e)}>
                    {this.state.processes
                        ?
                            this.state.processes.map((process, index) => {
                                return (
                                    <option value={process.id} key={index}>{process.name}</option>
                                )
                            })
                        :
                            <option disabled value={-1}>This user has no Processes</option>
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
                <div className={'spinner-border text-primary'}></div>
            :
                null
        );
    }

    render() {
        console.log(this.state)
        return (
            <Layout>
                <div className='container'>
                    <div className={'page-header row'}>
                        <div className={'col-1 align-self-center'}>
                            {this.loading_render()}
                        </div>
                        <h1 className={'col-10 text-center'}>Anlytics</h1>
                    </div>
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
