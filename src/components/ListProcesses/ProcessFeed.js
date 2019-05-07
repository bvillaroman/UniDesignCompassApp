import React from 'react';
import { CardColumns } from 'react-bootstrap';
import ProcessCard from "./ProcessCard"

class ProcessFeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      processes : [],
      currentProcess : {}
    };
  }

  componentDidMount(){
    const processes      = this.props.processes ? this.createProcesses(this.props.processes)
                         : [];
                         
    const currentProcess = this.props.currentProcess ? <ProcessCard process={this.props.currentProcess} />
                         : (processes.length > 0) ? processes[0]
                         : {};
    this.setState({ processes,currentProcess })
  }
  
  createProcesses = (processes) => (processes.map((process) => (<ProcessCard process={process} />)))

  showProcesses = () => {
    const {processes} = this.state;
    if(processes.length < 1) {
      return (<span>You have not created any Processes!</span>)
    } else{
      return (<CardColumns>{ processes }</CardColumns>)
    }
  }

  render() {
    return (
      <React.Fragment>
        { this.showProcesses() }
      </React.Fragment>
    )
  }
}

export default ProcessFeed;