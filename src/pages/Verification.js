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
import config from "../aws-exports";
import { Auth } from "aws-amplify";
import { createUser } from "../graphql_utils/utils";
import {navigate} from "gatsby"
Auth.configure(config);
/**
 * Component that displays the Verification page and handles user verification
 */
class Verification extends Component {
    constructor(props){
        super(props);
        this.state={
            code: "",
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    /**
     * Confirms the users email address by sending the authentication code to the backend.
     */
    handleVerify = (e) => {
        e.preventDefault();
        Auth.confirmSignUp(this.props.location.state.username, this.state.code)
            .then((res) => {
                console.log(res);
                createUser(this.props.location.state.username,this.props.location.state.first_name,
                    this.props.location.state.last_name,
                    this.props.location.state.email,this.props.location.state.phone,
                    1234).then( // CHange PAssword Hash.
                        (result) => {
                            alert("Account Confirmed");
                            navigate("/Login")
                        }, (error) => {
                            alert("Something went wrong");
                            console.log(error);
                        }
                    );
            }, (error) => {
                console.log(error);
                alert(error.message);
            })
    }
    render() {
        return (
            <div className="container">
                <div className="Verify">
                    <form onSubmit={this.handleVerify}>
                        <FormGroup controlId="code">
                            <ControlLabel>Enter Code</ControlLabel>
                            <FormControl autoFocus type="text" value={this.state.code}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Verification;