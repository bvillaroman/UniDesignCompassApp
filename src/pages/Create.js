import React from "react";
import Layout from '../components/layout';
import { Button, Form } from 'react-bootstrap';
import CompassForm from '../components/compassForm'
import {createNewCompass} from '../graphql_utils/utils';
import { connect } from 'react-redux';

const CustomOrPremade = (props) =>  (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Do you want a custom Compass or a prebuilt Compass?</Form.Label>
      <Button variant="primary" onClick={e => {props.createCompass(false)}}> Custom </Button>
      <Button variant="primary" onClick={e => {props.createCompass(true)}}> Default </Button>
    </Form.Group>
)
const default_phases= [
  {title:"Research",
   Description:"Phase for Research"},
   {title:"Design",
   Description:"Phase for Design"},
   {title:"Build",
   Description:"Phase for Build"},
   {title:"Brainstorm",
   Description:"Phase for Brainstorm"},
   {title:"Laugh",
   Description:"Phase for Laugh"}
]
const PhaseNumber = (props) =>  (
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>How many phases are in your design process</Form.Label>
    <Form.Control as="select" onChange={props.handlePhaseAmount}>
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

const DescribePhases = (props) =>  (
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Describe each phase in your design process</Form.Label>
      <Form.Label>Title of Phase</Form.Label>
      <Form.Control type="email" placeholder="Title of Title" />
      <Form.Label>Description of your Phase</Form.Label>
      <Form.Control as="textarea" rows="3" />
  </Form.Group>
)

class CreatePage extends React.Component {
  state = {
    canSubmit: false,
    defaultCompass: true,
    numberOfPhases: 0,
    phases: []
  }

  handleCompassType = (isDefaultCompass) => {
    this.setState({defaultCompass: isDefaultCompass, canSubmit: isDefaultCompass})
  }

  handlePhaseAmount = (e) => {
    this.setState({numberOfPhases: e.target.value})
  }

  handlePhaseDetail = (e) => {
    return e.target.value
  }

  createPhase = (title,description,phaseNumber) => {
    const phases = this.state.phases.append({title,description,phaseNumber});
    this.setState({phases})
  }
  createCompass=(isDefault) =>{
    this.handleCompassType(isDefault);
    if(this.state.defaultCompass){
      console.log(this.props.user);
       createNewCompass(this.props.user,default_phases)
    }else{
      console.log("not default");
    }
  }
  handleForms = () => {
    switch(true) {
      case !this.state.defaultCompass && this.state.numberOfPhases < 1:
        return <PhaseNumber handlePhaseAmount={this.handlePhaseAmount}/>
      case !this.state.defaultCompass && this.state.numberOfPhases > 0:
        return <DescribePhases/>
      default: 
        return <CustomOrPremade createCompass={this.createCompass}/>   
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
export default connect(mapStateToProps,null)(CreatePage);
