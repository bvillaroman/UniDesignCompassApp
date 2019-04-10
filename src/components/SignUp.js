import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import ControlLabel from "react-bootstrap/FormLabel";


class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="SignUp">
                <form onSubmit={this.props.handleCreate}>
                    <FormGroup controlId="username">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl placeholder= "jondoe1" autoFocus type="text" 
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <ControlLabel>email</ControlLabel>
                        <FormControl placeholder="john.doe@email.com" autoFocus type="text"
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>New Password</ControlLabel>
                        <FormControl placeholder="New Password" autoFocus type="password" 
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="repeat_pass">
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl autoFocus type="password" 
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="phone">
                        <ControlLabel>Phone Number</ControlLabel>
                        <FormControl placeholder="+###########" autoFocus type="tel"
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        )
    }

}

export default SignUp;