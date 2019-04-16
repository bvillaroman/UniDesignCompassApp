import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import ControlLabel from "react-bootstrap/FormLabel";

class NewPassword extends Component{
    render(){
        return(
            <div className='container'>
            <div className='Pass_Change'>
            <form onSubmit={this.props.handlePass}>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>New Password</ControlLabel>
                    <FormControl
                        autoFocus
                        placeholder="New Password"
                        type="text"
                        onChange={this.props.handleChange}/>                    
                </FormGroup>
                <FormGroup controlId="repeat_pass" bsSize="large">
                    <ControlLabel>Confirm password</ControlLabel>
                    <FormControl
                        onChange={this.props.handleChange}
                        type="password"
                    />
                </FormGroup>
                <Button
                    block
                    bsSize ="large"
                    type="submit"
                    >Submit</Button>
            </form>
            </div>
            </div>
        )
    }
}

export default NewPassword;