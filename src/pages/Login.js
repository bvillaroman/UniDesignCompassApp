import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import ControlLabel from "react-bootstrap/FormLabel";
import Layout from "../components/layout"
import "../components/bootstrap.css"
import {connect} from 'react-redux';
import {authenticateUser} from '../state/actions';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

    }
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleAuth = (e) =>{
        e.preventDefault();
        console.log('working');
        this.props.authenticateUser(this.state.email,this.state.password);
    };

    render() {
        console.log(this.props.isAuthenticated)
        return (
            <Layout>
            <div className="Login">
                <form onSubmit={this.handleAuth}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
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
        </Layout>
        )
    }
  }

  function mapStateToProps (state){
    console.log(state);
      return{
          isAuthenticated:state.isAuthenticated,
      }
  }
  export default connect(mapStateToProps,{authenticateUser})(Login);