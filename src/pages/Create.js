import React from "react";
import Layout from '../components/layout';
import { Button, Form } from 'react-bootstrap';
import _ from "lodash";
import CompassForm from '../components/compassForm'
import {createNewCompass,getUser} from '../graphql_utils/utils';
import { connect } from 'react-redux';
import { updateUser } from '../state/actions'

const SubmitCompass = (props) =>  (
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title of your Design Compass</Form.Label>
    <Form.Control name="title" type="text" placeholder="Title" onChange={props.onChange} value={props.title} />
    <Button variant="primary" onClick={props.createCompass}> Submit Compass </Button>
  </Form.Group>
)

const ChooseStructure = (props) =>  (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Do you want a custom Compass or a prebuilt Compass?</Form.Label>
      <Button variant="primary" onClick={e => {props.handleCompassType(false)}}> Custom </Button>
      <Button variant="primary" onClick={e => {props.handleCompassType(true)}}> Default </Button>
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
const PhaseNumber = (props) =>  (
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>How many phases are in your design process</Form.Label>
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
  </Form.Group>
)

class DescribePhase extends React.Component{
  state = {
    title: "",
    description: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value 
    })
  }

  handleSubmit = (e) => {
    this.props.createPhase(this.state.title, this.state.description,this.props.id + 1)
  }

  render(){
    const {title,description} = this.state;
    return (
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Title of Phase</Form.Label>
        <Form.Control name="title" type="text" placeholder="Title" onChange={this.onChange} value={title} />
        <Form.Label>Description of your Phase</Form.Label>
        <Form.Control name="description" as="textarea" placeholder="Description" onChange={this.onChange} value={description} rows="3" />
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Create</Button>
      </Form.Group>
    )
  }
} 

class CreatePage extends React.Component {
  state = {
    compassTitle: "",
    canSubmit: false,
    defaultCompass: true,
    numberOfPhases: 0,
    phases: [],
    status: "chooseStructure"
  }

  handleCompassTitle = (e) => {
    this.setState({compassTitle: e.target.value})
  }

  handleCompassType = (isDefaultCompass) => {
    if (isDefaultCompass){
      this.setState({defaultCompass: isDefaultCompass, phases: default_phases,status: "submitCompass"})
    } else {
      this.setState({defaultCompass: isDefaultCompass, status: "numOfPhases"})
    }
  }

  handlePhaseAmount = (e) => {
    this.setState({numberOfPhases: e.target.value,status:"createPhases"})
  }

  createPhase = (title,description,phaseNumber) => {
    let phases = this.state.phases
    phases.push({title,description,phaseNumber});
    phases = _.uniqBy(phases.reverse(), 'phaseNumber')
    this.setState({phases})
  }

  createCompass = () =>{
    const {compassTitle, phases} = this.state;
    createNewCompass(this.props.user,compassTitle,phases)
    .then((res) => {
      const result = res.data.getProcess
      const newProcess = {
        compassID: result.id,
        phases: result.phaseids.items,
        compassTitle: result.name,
        dateStart: result.date_start,
      }
      getUser(this.props.user.id)
      .then((newUser) => {
        const user = newUser.data.getUser
        console.log(user)
        this.props.updateUser(newUser.data.getUser);
      })
    })
  }

  submitPhases = (e) => {
    this.setState({status: "submitCompass"})
  }

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
            <Form.Label>Describe each phase in your design process</Form.Label>
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
        <CompassForm>
          {this.handleForms()}
        </CompassForm>
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
