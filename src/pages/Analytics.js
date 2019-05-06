import React, { Component } from "react";
import Layout from "../components/layout"
import ResponsiveBarChart from '../components/ResponsiveBarChart';
import  {connect} from "react-redux"
import {authenticateUser} from "../state/actions"
import * as Utils from '../graphql_utils/utils'
import LogCard from "../components/LogCard";
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
        processes.sort((a, b) => {
            return a.date_start - b.date_start;
        })
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
            const items = phases.map(phase => {
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
        const enabled = !true;
        if(enabled) {
            const log_string = `log created on ${new Date().toString()}`;
            Utils.createLogs(phase_id, Date.now(), log_string).then(res => {
                // console.log(res);
            });
    
            // Utils.updateUser({
            //     id: this.props.user.id,
            //     first_name: 'ramon'
            // }).then(res => {
            //     console.log(res);
            // })
        }
    }

    load_log_data(process_id) {
        this.setState({
            loading: true
        });
        Utils.getProcess(process_id).then(res => {
            const phase_ids = res.data.getProcess.phaseids.items.map(phase => {
                return phase.id
            });
            Promise.all(phase_ids.map(phase_id => {
                return Utils.getPhase(phase_id).then(res => { 
                    const phase = res.data.getPhase;
                    const logs = phase.logs.items;
                    logs.sort((a, b) => {
                        return a.timestamp - b.timestamp;
                    })
                    return {
                        phase_id: phase.id,
                        title: phase.title,
                        log_ids: logs
                    };
                })
                .catch(res => {
                    // handle error when somehome a log has null for text
                    const phase = res.data.getPhase;
                    let logs = phase.logs.items;

                    console.log('erorr')
                    console.log(phase_id)
                    console.log(logs)
                    
                    //filter out null entries
                    logs = logs.filter(item => item)

                    
                    logs.sort((a, b) => {
                        return a.timestamp - b.timestamp;
                    })
                    return {
                        title: phase.title,
                        phase_id: phase.id,
                        log_ids: logs
                    };
                })
            })).then(phase_logs => {
                this.setState({
                    loading: false,
                    selected_process_phase_logs: phase_logs
                });
                // testing creating a log
                const phase_id = phase_logs[1].phase_id;
                this.test_create_log(phase_id);             
            });
        })
    }

    deleteLogHandler = (log_id) => {
        this.setState({
            loading: true
        });
        Utils.deleteLogs(log_id).then(res => {
            this.setState({
                loading: false
            });
            this.load_log_data(this.state.selected_process_id)
        })
    }

    updateLogHandler = (log_id, timestamp, text) => {
        this.setState({
            loading: true
        })
        // don't send empty strings
        text = text ? text : '(blank entry)';
        Utils.updateLogs(log_id, timestamp, text).then(res => {
            this.setState({loading: false})
            this.load_log_data(this.state.selected_process_id)
        })
    }

    process_logs_render = () => {
        // combine all logs from all phases
        const data = this.state.selected_process_phase_logs
        ?
            this.state.selected_process_phase_logs.reduce((arr, phase) => {
                // console.log(phase)
                const logs = phase.log_ids.map(log => {
                    return {
                        phase_title: phase.title,
                        id: log.id,
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
                <div className={''}>
                    {data.map(log => {
                        return <LogCard key={log.id} logData={log} deleteHandler={this.deleteLogHandler} updateHandler={this.updateLogHandler}/>
                    })}
                </div>
            : 
                null;
    }

    process_select_render = () => {
        return(
            <div className="d-flex flex-column" >
                <select 
                    className={'custom-select'} 
                    value={this.state.selected_process_id} 
                    onChange={e => this.process_select_handler(e)}
                >
                    {this.state.processes
                        ?
                            this.state.processes.map(process => {
                                return <option value={process.id} key={process.id}>{process.name}</option>
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
        const style = {
            position: 'fixed',
            zIndex: '1020',
            top: '50%',
            left: '50%',
        }
        return (this.state.loading
            ? <div style={style} className={'spinner-border text-primary'}></div>
            : null
        );
    }

    render() {
        // console.log(this.state)
        return (
            <Layout>
                <div className='container'>
                    {this.loading_render()}
                    <div className={'page-header'}>
                        <h1 className={'text-center'}>Analytics</h1>
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
