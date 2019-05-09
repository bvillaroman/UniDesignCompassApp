import React, { Component } from "react";
import {navigate} from "gatsby"
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { connect } from 'react-redux';
import { authenticateUser } from '../state/actions';
import { Auth } from "aws-amplify";
import config from "../aws-exports";
import SignIn from "../components/SignIn";
import {getUserbyUsername } from "../graphql_utils/utils";
import SpinningWheel from "../components/SpinningWheel"
Auth.configure(config);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: "",
            user: [],
            loading: false
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    handleAuth = (e) => {
        e.preventDefault();
        this.setState({loading: true}, () => {
            Auth.signIn(this.state.username, this.state.password)
            .then((res) => {
                console.log(res)
                switch (res.challengeName) {
                    case "NEW_PASSWORD_REQUIRED":
                        navigate("/newPassword",{state:{username:this.state.username}});
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
                this.setState({loading: false})
            });
        })
    };
    createAccount = (e) => {
        navigate("/SignUp");
    }
    render() {
        return (
        <Layout>
            <SignIn 
                handleAuth={this.handleAuth} 
                handleChange={this.handleChange} 
                handleAccount={this.createAccount} 
            />
            {this.state.loading && <SpinningWheel />}
        </Layout>
        );
    }
}

const mapStateToProps = ({state}) => ({ isAuthenticated: state.isAuthenticated })

const mapDispatchToProps = dispatch => ({
    authenticateUser: (auth) => dispatch(authenticateUser(auth))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
