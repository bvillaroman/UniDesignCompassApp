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
                        <FormControl autoFocus type="text" value={this.props.username}
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <ControlLabel>email</ControlLabel>
                        <FormControl autoFocus type="text" value={this.props.email}
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>New Password</ControlLabel>
                        <FormControl autoFocus type="password" value={this.props.password}
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="repeat_pass">
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl autoFocus type="password" value={this.props.repeat_pass}
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="phone">
                        <ControlLabel>Phone Number</ControlLabel>
                        <FormControl autoFocus type="tel" value={this.props.phone}
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