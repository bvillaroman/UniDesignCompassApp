import React, { Component } from 'react';
import "../bootstrap.css"
import { log_list } from '../../dummyData';
import { updateUser } from '../../state/actions'
import { connect } from 'react-redux';
import Phase from './Phase';
import {getProcess} from '../../graphql_utils/utils'

class Compass extends Component {
    state = {
        compassName: "",
        compassPhases: [],
        previous: true,
        next: true,
        currentPhase: '0',
        emptyTime: "00:00:00",
        currentTime: "00:00:00",
        log: ""
    }

    componentDidMount(){
        if (this.props.id){
            getProcess(this.props.id)
            .then((res) => {
                const compass = res.data.getProcess;
                const compassName = compass.name;
                const compassPhases = compass.phaseids.items.map((phase,index) => {
                    return { 
                        id: phase.id,
                        key: index + 1,  
                        name: phase.title, 
                        logs: phase.logs, 
                        description: phase.description, 
                        // time: phase.duration
                        time: 0
                    }
                })

                console.log(compassPhases.logs)
                this.setState({
                    compassName,
                    compassPhases,
                })
            })
            .catch( err => {
                alert("there was an error with fetching your compass, we are showing you a default compass template")
                this.setState({
                    compassName: "Universal Design Compass",
                    compassPhases: [
                        { key: '1', name: 'A. Define Problem', icon: '', description: '', link: '#', time: 0 },
                        { key: '2', name: 'B. Research', icon: '', description: '', link: '#', time: 0 },
                        { key: '3', name: 'C. Brainstorm', icon: '', description: '', link: '#', time: 0 },
                        { key: '4', name: 'D. Select', icon: '', description: '', link: '#', time: 0 },
                        { key: '5', name: 'E. Construct', icon: '', description: '', link: '#', time: 0 },
                        { key: '6', name: 'F. Evaluate', icon: '', description: '', link: '#', time: 0 },
                        { key: '7', name: 'G. Communicate', icon: '', description: '', link: '#', time: 0 },
                        { key: '8', name: 'H. Redisign', icon: '', description: '', link: '#', time: 0 },
                    ],
                    previous: true,
                    next: true,
                    currentPhase: '0',
                    emptyTime: "00:00:00",
                    currentTime: "00:00:00",
                    log: ""
                })
            })
        } else {
            this.setState({
                compassName: "There is no compass here",
            })
        }
    }

    parsePhases = () => {

    }

    parseTime

    compassButtonHandler = (phase) => {//handle current phase too.
        this.setState({ currentPhase: phase.key })// Some sort of delay when logging maybe also delay in updating?
    }
    
    previousButtonHandler = () => {
        var temp = !this.state.previous//need to handle active and disabled booleans too
        this.setState({ previous: temp });
    }

    nextButtonHandler = (e) => {
        var temp = !this.state.next//need to handle active and disabled booleans too
        this.setState({ next: temp });
    }

    handleTextArea = (e) => {
        this.setState({ log: e.target.value })
    }

    updateLogHandler = (event) => {
        var x = new Date()
        var minutes = x.getMinutes();
        var seconds = x.getSeconds();
        var milliseconds = x.getMilliseconds();
        var temp = minutes.toString() + ":" + seconds.toString() + ":" + milliseconds.toString()
        const log = { id: this.state.currentPhase, timestamp: temp, text: this.state.log };
        log_list.data.push(log); // Temporary
        // console.log(log_list.data); //Temporary
        this.forceUpdate();
        //API.graphql(graphqlOperation(createLog, { input: log })); //taken out temporarily!
    }

    adjustTime = (index, time) => {
        let compassPhases = this.state.compassPhases
        compassPhases[index].time = time
        this.setState({ compassPhases })
    }

    generateLogs(phase, currentPhase) {
        if (currentPhase === phase) {
            const filtered = log_list.data.filter((entry) => {
                return (entry.id === phase);
            })
            return (filtered.map((data,index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <style>{'td{background-color:rgba(50,115,220,0.3);color:grey}'}</style>
                            <td >{data.text}</td>
                            <td>{data.timestamp}</td>
                        </tr>
                    </tbody>
                );
            }));
        }
    }

    generatePhase = (phase,index) => (
        <Phase
            currentPhase={this.state.currentPhase}
            phase={phase}
            phaseid={phase.id}
            compassButtonHandler={this.compassButtonHandler}
            index={index}
            updateLogHandler={this.updateLogHandler}
            previous={this.state.previous}
            next={this.state.next}
            nextButtonHandler={this.nextButtonHandler}
            previousButtonHandler={this.previousButtonHandler}
            handleTextArea={this.handleTextArea}
            log={this.state.log}
            adjustTime={this.adjustTime}
            generateLogs={this.generateLogs}
        />
    )

    render() {
        const {compassName,compassPhases} = this.state
        return (
            <div className='container'>
                <h1 className='text-center'>{compassName}</h1>
                <div>
                    {compassPhases.map((phase, index) => (this.generatePhase(phase,index)))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ state }) => ({
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Compass);

