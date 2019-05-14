/**
 * @fileoverview The login file responsible for display the login page and handeling login functionality
 * @author <a href="">Ronuel Diaz</a>
 * @version 1.0.0
 */
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
/**
 * Component that renders the Sign Up page and handles account creation.
 */
class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            first_name: " ", //Add firstname and Lastname to Sign Up page
            last_name: " ",
            email: "",
            password: "",
            repeat_pass: "",
            username: "",
            phone:""
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    /**
     * Sends users information to the backend and creates the new user account.
     */
    handleCreate = (e) => {
        e.preventDefault();
        if (!this.comparePasswords()) {
            alert("Passwords do not match");
            return;
        }
        let attributes = { username: this.state.username, password: this.state.password, attributes: { email: this.state.email, phone_number: this.state.phone } };
        Auth.signUp(attributes)
            .then((res) => {
                alert("Check your email for Verification code");
                navigate("/Verification",{state:{username:this.state.username,first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,phone:this.state.phone}});
            }, (error) => {
                console.log(error);
                alert(error.message);
            })
    }
    /**
     * Asserts whether the password matches the confirmed password field.
     * 
     * @return {boolean} whether the passwords match
     */
    comparePasswords = () => {
        if (this.state.password === this.state.repeat_pass) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        return (<Layout>
            <div className="container">
                <div className="SignUp">
                <form onSubmit={this.handleCreate}>
                    <FormGroup controlId="first_name">
                    <ControlLabel>First name</ControlLabel>
                        <FormControl placeholder= "jon" autoFocus type="text" 
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="last_name">
                    <ControlLabel>Last name</ControlLabel>
                        <FormControl placeholder= "doe" autoFocus type="text" 
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="username">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl placeholder= "jondoe1" autoFocus type="text" 
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <ControlLabel>email</ControlLabel>
                        <FormControl placeholder="john.doe@email.com" autoFocus type="text"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>New Password</ControlLabel>
                        <FormControl placeholder="New Password" autoFocus type="password" 
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="repeat_pass">
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl autoFocus type="password" 
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="phone">
                        <ControlLabel>Phone Number</ControlLabel>
                        <FormControl placeholder="+###########" autoFocus type="tel"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
            </Layout>
        )
    }
}

export default SignUp;