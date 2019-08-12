/**
 * @fileoverview The login file responsible for display the login page and handeling login functionality
 * @author <a href="">Ronuel Diaz</a>
 * @version 1.0.0
 */
import React, { Component } from "react";
import { navigate } from "gatsby"
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { connect } from 'react-redux';
import { authenticateUser } from '../state/actions';
import { Auth } from "aws-amplify";
import config from "../aws-exports";
import { getUserbyUsername } from "../graphql_utils/utils";
import SpinningWheel from "../components/SpinningWheel";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import ControlLabel from "react-bootstrap/FormLabel";
Auth.configure(config);

/**
 * Component that handles User login and displays Login GUI
 */
export class Login extends Component {

    state = {
        password: "",
        username: "",
        user: [],
        loading: false
    };

    /**
     * Changes state information dependent on the input information from front end
     */
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    /**
     * Handles user authentication by sending user information to cognito and graphql database.
     */
    handleAuth = (e) => {
        e.preventDefault();
        this.setState({ loading: true }, () => {
            Auth.signIn(this.state.username, this.state.password)
                .then((res) => {
                    console.log(res)
                    switch (res.challengeName) {
                        case "NEW_PASSWORD_REQUIRED":
                            navigate("/newPassword", { state: { username: this.state.username } });
                            break;
                        case "SOFTWARE_TOKEN_MFA":
                            break;
                        case "MFA_SETUP":
                            break;
                        case "SMS_MFA":
                            break;
                        default:
                            getUserbyUsername(this.state.username)
                                .then((res) => {
                                    const user = res.data.getUser
                                    this.props.authenticateUser(user);
                                    navigate("/")
                                })
                    }
                }, (error) => {
                    console.log(error);
                    alert(error.message);
                    this.setState({ loading: false })
                });
        })
    };
    /**
     * Navigates to the Signup page when the create account button is clicked
     */
    createAccount = (e) => {
        navigate("/SignUp");
    }
    render(){
        return (
            <Layout>
                <div className='container'>
                    <div className="Login">
                        <form onSubmit={this.handleAuth}>
                            <FormGroup controlId="username" bssize="large">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl
                                    placeholder="Username"
                                    autoFocus
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bssize="large">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <Button 
                                bssize="large"
                                type="submit"
                            >
                                Login
                            </Button>
                            <Button className="float-right" onClick={this.createAccount}>Create New Account</Button>
                        </form>
                    </div>
                </div>
                {this.state.loading && <SpinningWheel />}</Layout>
        )
    }
}

const mapStateToProps = ({ state }) => ({ isAuthenticated: state.isAuthenticated })

const mapDispatchToProps = dispatch => ({
    authenticateUser: (auth) => dispatch(authenticateUser(auth))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
