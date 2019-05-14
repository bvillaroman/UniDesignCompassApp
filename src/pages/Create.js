/**
 * @fileoverview The Create Page that allows logged in users to create their Compasses
 * @author Abraham Villaroman
 * @version 1.0.0
*/

import React from "react";
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import { Button, Form } from 'react-bootstrap';
import _ from "lodash";
import {createNewCompass} from '../graphql_utils/utils';
import { connect } from 'react-redux';
import { updateUser } from '../state/actions'
import SpinningWheel from "../components/SpinningWheel"

/**
 * @class SubmitCompass
 * Form that handles submission of the design process
 * takes in the title of the desired compass and fires the createCompass handler
 */
export const SubmitCompass = (props) =>  (
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="form-title">Title of your Design Compass</Form.Label>
    <div className="input-area">
      <Form.Control name="title" type="text" placeholder="Title" onChange={props.onChange} value={props.title} />
      <Button className="input-button" variant="primary" onClick={props.createCompass}> Submit Compass </Button>
    </div>
  </Form.Group>
)

/**
 * @class Choose Structure
 * Form that handles Structure of the design process
 * prompts the user to either pick the default structure or a custom structure
 */
export const ChooseStructure = (props) =>  (
    <Form.Group controlId="formBasicEmail">
      <Form.Label className="form-title">Choose a Compass Style:</Form.Label>
      <div className="input-area">
        <Button className="input-button" id="Custom"  variant="primary" onClick={e => {props.handleCompassType(false)}}> Custom </Button>
        <Button className="input-button" id="Default" variant="primary" onClick={e => {props.handleCompassType(true)}}> Default </Button>
      </div>
      
    </Form.Group>
)
const default_phases= [
  {title:"Research",
   description:"Phase for Research"},
   {title:"Design",
   description:"Phase for Design"},
   {title:"Build",
   description:"Phase for Build"},
   {title:"Brainstorm",
   description:"Phase for Brainstorm"},
   {title:"Laugh",
   description:"Phase for Laugh"}
]

/**
 * @class PhaseNumber
 * Form that handles Structure of the design process
 * prompts the user to choose the number phases they want in their process
 */
export const PhaseNumber = (props) =>  (
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label className="form-title">How many phases are in your design process</Form.Label>
    <div className="input-area">
      <Form.Control as="select" onChange={props.handlePhaseAmount}>
        <option value="0">-</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </Form.Control>
    </div>
  </Form.Group>
)

/**
 * Form that handles creation of a phase in their design process
 * prompts the user to name their phase and it's description
 */
export class DescribePhase extends React.Component{
  state = {
    title: "",
    description: "",
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value 
    },() => {
      this.props.createPhase(this.state.title, this.state.description,this.props.id + 1)
    })

  }

  render(){
    const {title,description} = this.state;
    return (
      <Form.Group >
        <Form.Label className="form-sub-title">{`Phase ${this.props.id + 1}`}</Form.Label>
        <Form.Control id="phaseTitle" name="title" type="text" placeholder="Title" onChange={this.onChange} value={title} />
        <Form.Control id="phaseDescription" name="description" as="textarea" placeholder="Description" onChange={this.onChange} value={description} rows="3" />
      </Form.Group>
    )
  }
} 

/**
 * The page that handles creation of a a design process
 * holds all the logic in changing and storing the form data, then submits the data to the server
 */
export class CreatePage extends React.Component {
  state = {
    compassTitle: "",
    canSubmit: false,
    defaultCompass: true,
    numberOfPhases: 0,
    phases: [],
    status: "chooseStructure",
    loading: false
  }

/**
 * event handler for the Process title
 * changes the value of this.state.compassTitle
 * @param {Object} event object that holds the value of the Process Title
*/
  handleCompassTitle = (e) => {
    this.setState({compassTitle: e.target.value})
  }

/**
 * event handler for the Process Structure
 * changes the value of this.state.defaultCompass
 * when the user submits the structure, switch to the submitCompass form
 * @param {bool} boolean that holds the structure type of our Process (true === default structure, false === custom structure)
*/
  handleCompassType = (isDefaultCompass) => {
    if (isDefaultCompass){
      this.setState({defaultCompass: isDefaultCompass, phases: default_phases,status: "submitCompass"})
    } else {
      this.setState({defaultCompass: isDefaultCompass, status: "numOfPhases"})
    }
  }

/**
 * event handler for the Phase amount 
 * changes the value of this.state.phaseAmount
 * when the user submits the number of phases, switch to the createPhases form
 * @param {Object} event object that holds the value of the Phase Amount
*/
  handlePhaseAmount = (e) => {
    this.setState({numberOfPhases: e.target.value,status:"createPhases"})
  }

/**
 * event handler that creates the phases
 * changes the value of this.state.phases with an array of phases with their title and descriptions
 * @param {Object} event object that holds the Phase objects
*/
  createPhase = (title,description,phaseNumber) => {
    let phases = this.state.phases
    phases.push({title,description,phaseNumber});
    phases = _.uniqBy(phases.reverse(), 'phaseNumber')
    this.setState({phases})
  }
  
/**
 * makes the api request to submit a new compass with: Process Title and the defined phases in the Process
 * if the server request is succesful, the user is redirected to the process screen
 * otherwise, there was an error
*/
  createCompass = () => {
    const {compassTitle, phases} = this.state;
    this.setState({ loading: true }, () => {
      createNewCompass(this.props.user,compassTitle,phases)
      .then((res) => {
          navigate(`/Process/${res.data.getProcess.id}`)
      })
      .catch((err) => {
        alert(err)
        this.forceUpdate();
      })
    })
  }
  /**
   * when the user is done with all the phases, change the form to the submitCompass Form
   */
  submitPhases = (e) => {
    this.setState({status: "submitCompass"})
  }

  /**
   * handles the displaying of forms for the user to operate with to create their design process
   */
  handleForms = () => {
    switch(this.state.status) { 
      case "chooseStructure":
        return <ChooseStructure handleCompassType={this.handleCompassType}/>   
      case "numOfPhases":
        return <PhaseNumber handlePhaseAmount={this.handlePhaseAmount}/>
      case "createPhases":
        const Phases = Array.from({length: this.state.numberOfPhases}, (_, id) => ( 
            <DescribePhase createPhase={this.createPhase} id={id} key={id}/> 
          )
        )
        return (
          <div>
            <Form.Label className="form-title">Describe each phase in your design process</Form.Label>
              {Phases}
            <Button onClick={this.submitPhases}>Submit Phases</Button>
          </div>
        )
      case "submitCompass":
        return <SubmitCompass 
                  createCompass={this.createCompass} 
                  title={this.state.compassTitle} 
                  onChange={this.handleCompassTitle}
                />
      default: 
        return <ChooseStructure handleCompassType={this.handleCompassType}/>   
    }
  }

  render(){
    return (
      <Layout>
          <h2> Create Your Compass </h2>
          <div className="form-container">
            {this.handleForms()}
            { this.state.loading && <SpinningWheel/>}
          </div>
      </Layout>
    )
  }
}
const mapStateToProps =({state})=>(
  {user: state.user}
)
const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(CreatePage);
