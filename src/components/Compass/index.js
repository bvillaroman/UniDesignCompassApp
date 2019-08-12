/**
 * @fileoverview Thise Files handles what happens in a compass
 * @author <a href="">Jeter Gutierrez</a>
 * @version 1.0.0
 */

import React, { Component } from 'react';
import "../bootstrap.css"
import { updateUser } from '../../state/actions'
import { connect } from 'react-redux';
import Phase from './Phase';
import {getProcess} from '../../graphql_utils/utils'
import SpinningWheel from "../SpinningWheel"
/**
 * Component that handles the compass design and functionality
 */
export class Compass extends Component {
    state = {
        compassName: "",
        compassPhases: [],
        previous: true,
        next: true,
        currentPhase: '0',
        emptyTime: "00:00:00",
        currentTime: "00:00:00",
        loading: false
    }

    componentDidMount(){
        if (this.props.id) {
            this.setState({loading: true}, () => {
                this.setProcess(this.props.id)
                this.props.updateHandler("")
            })
        }
        else {
            this.setState({ compassName: "There is no compass here" })
        }
    }

    componentDidUpdate(){
        if (this.props.updateComponent) {
            this.setState({loading: true}, () => {
                this.setProcess(this.props.id)
                this.props.updateHandler("")
            })
        }
    }
/**
 * Change the process that is being used
 */
    setProcess = (id) => {
        getProcess(id)
            .then((res) => {
                const compass = res.data.getProcess;
                const compassName = compass.name;
                const compassPhases = compass.phaseids.items.map((phase,index) => {
                    return { 
                        id: phase.id,
                        key: index + 1,  
                        name: phase.title, 
                        description: phase.description, 
                        time: 0
                    }
                })

                this.setState({
                    compassName,
                    compassPhases,
                    loading: false
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
                    loading: false
                })
            })
    }
/**
 * Handler for what happens when a button is pressed in order to change the current phase.
 */
    compassButtonHandler = (phase) => {//handle current phase too.
        this.setState({ currentPhase: phase.key })
    }
    
/**
 * Component that handles which log is the previous log.
 */
    previousButtonHandler = () => {
        var temp = !this.state.previous//need to handle active and disabled booleans too
        this.setState({ previous: temp });
    }

/**
 * Component that handles which log is the next log.
 */
    nextButtonHandler = (e) => {
        var temp = !this.state.next//need to handle active and disabled booleans too.
        this.setState({ next: temp });
    }

/**
 * Component that call the Phase class to generate the phase structure for the compass.
 */    

    generatePhase = (phase,index) => (
        <Phase
            currentPhase={this.state.currentPhase}
            phase={phase}
            phaseid={phase.id}
            compassButtonHandler={this.compassButtonHandler}
            index={index}
            previous={this.state.previous}
            next={this.state.next}
            nextButtonHandler={this.nextButtonHandler}
            previousButtonHandler={this.previousButtonHandler}
        />
    )

    render() {
        const {compassName,compassPhases} = this.state
        return (
            <div className='container'>
                { 
                    this.state.loading ? <SpinningWheel/> 
                    : compassPhases.map((phase, index) => (this.generatePhase(phase,index)))
                }
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

