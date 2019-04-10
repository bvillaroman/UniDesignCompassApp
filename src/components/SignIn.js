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
                            <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="text"
                                    value={this.props.email}
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
                                block
                                bsSize="large"
                                type="submit"
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </div>

    )
}
}
export default SignIn;