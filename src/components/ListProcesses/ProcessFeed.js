import React from 'react';
import { CardColumns } from 'react-bootstrap';
import ProcessCard from "./ProcessCard"
import Compass from "../Compass"

class ProcessFeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      processes : []
    };
  }

  componentDidMount(){
    const processes      = this.props.processes ? this.createProcesses(this.props.processes)
                         : [];
                         
    const currentProcess = this.props.currentProcess ? this
                         : "";
    this.setState({ processes,currentProcess })
  }
  
  createProcesses = (processes) => (processes.map((process,index) => (this.createCard(process,index))))

  createCard = (process,index) => <ProcessCard process={process} selectProcess={this.props.selectProcess} key={index}/>

  showProcessCards = () => {
    const {processes} = this.state;
    if(processes.length < 1) {
      return (<span>You have not created any Processes!</span>)
    } else{
      return (<CardColumns>{ processes }</CardColumns>)
    }
  }

  showProcess = (id) => (<Compass id={id}/>) 

  render() {
    return (
      <React.Fragment>
        {this.showProcessCards()}
      </React.Fragment>
    )
  }
}

export default ProcessFeed;