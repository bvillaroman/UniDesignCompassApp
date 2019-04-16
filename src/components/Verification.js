import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import ControlLabel from "react-bootstrap/FormLabel";

class Verification extends Component {
    render() {
        return (
            <div className="container">
                <div className="Verify">
                    <form onSubmit={this.props.handleVerify}>
                        <FormGroup controlId="code">
                            <ControlLabel>Enter Code</ControlLabel>
                            <FormControl autoFocus type="text" value={this.props.code}
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

export default Verification;