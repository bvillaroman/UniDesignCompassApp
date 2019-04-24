import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import ControlLabel from "react-bootstrap/FormLabel";
import {navigate} from "gatsby"
import config from "../aws-exports";
import { Auth } from "aws-amplify";
import Layout from "../components/layout"
Auth.configure(config);

class NewPassword extends Component{
    constructor(props){
        super(props);
        this.state={
            new_pass:"",
            repeat_pass:"",
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    handlePass = (e) => {
        e.preventDefault();
        console.log(this.props.location.state.username)
        if(!this.comparePasswords()){
            alert("Passwords dont match");
            return;
        }
        Auth.completeNewPassword(this.props.location.state.username, this.state.new_pass)
            .then((res) => {
                console.log(res);
                alert("Account verified Please Log In");
                navigate("/Login")
            }, (error) => {
                console.log(error);
                alert(error.message);
            })
    }
    comparePasswords = () => {
        if (this.state.new_pass === this.state.repeat_pass) {
            return true;
        } else {
            return false;
        }
    }
    render(){
        return(
            <Layout>
            <div className='container'>
            <div className='Pass_Change'>
            <form onSubmit={this.handlePass}>
                <FormGroup controlId="new_pass" bsSize="large">
                    <ControlLabel>New Password</ControlLabel>
                    <FormControl
                        autoFocus
                        placeholder="New Password"
                        type="text"
                        onChange={this.handleChange}/>                    
                </FormGroup>
                <FormGroup controlId="repeat_pass" bsSize="large">
                    <ControlLabel>Confirm password</ControlLabel>
                    <FormControl
                        onChange={this.handleChange}
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
            </Layout>
        )
    }
}

export default NewPassword;