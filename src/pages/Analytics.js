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
            // chartData: this.data,
            selected_process_id: -1
        };
    }

    initProcessSelect() {
        // load data of user and set to state
        const user = this.props.user;

        const processes = user.processes.items;
        const default_process = processes[0]
        this.setState({
            processes: processes,
            selected_process_id: default_process ? default_process.id : -1
        })
        this.load_process_data(default_process.id);
    }

    load_process_data(process_id) {
        this.load_chart_data(process_id);
        this.load_log_data(process_id);
    }

    componentDidMount() {
        this.initProcessSelect();
    }

    process_select_handler = (event) => {
        const process_id = event.target.value;
        this.setState({
            selected_process_id: process_id
        })
        this.load_process_data(process_id);
    }

    load_chart_data(process_id) {
        this.setState({
            loading: true
        });
        Utils.getProcess(process_id).then(res => {
            const phases = res.data.getProcess.phaseids.items;
            const items = phases.map((phase, index) => {
                return {
                    category: phase.title,
                    amount: phase.duration
                }
            })
            this.setState({
                loading: false,
                chartData: {
                    table: items
                }
            })
        })
    }

    test_create_log(phase_id) {
        Utils.createLogs(phase_id, Date.now(), 'log in other phase').then(res => {
            // console.log(res);
        });
    }

    load_log_data(process_id) {
        this.setState({
            loading: true
        });
        Utils.getProcess(process_id).then(res => {
            const phase_ids = res.data.getProcess.phaseids.items.map(phase => {
                return phase.id
            });
            // console.log(phase_ids)

            Promise.all(phase_ids.map((phase_id, index) => {
                return Utils.getPhase(phase_id).then(res => { 
                    const phase = res.data.getPhase;
                    const log_ids = phase.logs.items;
                    // get the logs from the log_ids and return log object
                    return {
                        phase_id: phase.id,
                        log_ids: log_ids
                    };
                })
            })).then(phase_logs => {
                // console.log(phase_logs)
                this.setState({
                    selected_process_phase_logs: phase_logs
                });

                //testing creating a log
                // const phase_id = phase_logs[1].phase_id;
                // this.test_create_log(phase_id);             
            });
        })
    }

    process_logs_render = () => {
        const data = this.state.selected_process_phase_logs
        ?
            this.state.selected_process_phase_logs.reduce((arr, phase) => {
                const logs = phase.log_ids.map(log => {
                    return {
                        timestamp: log.timestamp,
                        text: log.text
                    }
                })  
                arr.push(...logs);
                return arr;
            }, [])
        :   
            null;

        return data
            ? 
                data.map((log, index) => {
                    return<p key={index}>{log.text}</p>
                })
            : 
                null;
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
        return this.state.chartData
            ? <ResponsiveBarChart data={this.state.chartData} />
            : null;
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
                        {this.process_logs_render()}
                </div>
            </Layout>
        );
    }

    // data = {
    //     table : [
    //         {"category": "A", "amount": 28},
    //         {"category": "B", "amount": 55},
    //         {"category": "C", "amount": 43},
    //         {"category": "D", "amount": 91},
    //         {"category": "E", "amount": 81},
    //         {"category": "F", "amount": 53},
    //         {"category": "G", "amount": 19},
    //         {"category": "H", "amount": 87},
    //         {"category": "I", "amount": 23}
    //     ]
    // }
}

const mapStateToProps = ({state}) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user
})
const mapDispatchToProps = dispatch => ({
authenticateUser: (auth) => dispatch(authenticateUser(auth))
})

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
