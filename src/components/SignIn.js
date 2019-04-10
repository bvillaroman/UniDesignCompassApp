import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import ControlLabel from "react-bootstrap/FormLabel";
    
class SignIn extends Component{
constructor(props){
    super(props);
}
  render(){
    return(
        <div className='container'>
                    <div className="Login">
                        <form onSubmit={this.props.handleAuth}>
                            <FormGroup controlId="username" bsSize="large">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="text"
                                    value={this.props.username}
                                    onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    value={this.props.password}
                                    onChange={this.props.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <Button 
                                bsSize="large"
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