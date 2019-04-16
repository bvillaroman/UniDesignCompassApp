import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import ControlLabel from "react-bootstrap/FormLabel";
    
class SignIn extends Component{
  render(){
    return(
        <div className='container'>
                    <div className="Login">
                        <form onSubmit={this.props.handleAuth}>
                            <FormGroup controlId="username" bssize="large">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl
                                    placeholder="Username"
                                    autoFocus
                                    type="text"
                                    onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bssize="large">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    placeholder="Password"
                                    onChange={this.props.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <Button 
                                bssize="large"
                                type="submit"
                            >
                                Login
                            </Button>
                            <Button className="float-right" onClick={this.props.handleAccount}>Create New Account</Button>
                        </form>
                    </div>
                </div>

    )
}
}
export default SignIn;