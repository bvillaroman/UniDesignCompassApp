import React, { Component } from 'react';
import "../bootstrap.css"
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
                        description: phase.description, 
                        // time: phase.duration
                        time: 0
                    }
                })

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
                })
            })
        } else {
            this.setState({
                compassName: "There is no compass here",
            })
        }
    }

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

