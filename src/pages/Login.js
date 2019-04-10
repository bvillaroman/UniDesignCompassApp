import React, { Component } from "react";
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { connect } from 'react-redux';
import { authenticateUser } from '../state/actions';
import { Auth } from "aws-amplify";
import config from "../aws-exports";

import SignIn from "../components/SignIn";
Auth.configure(config);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",

        };
        this.handleAuth = this.handleAuth.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.contRef = React.createRef();
        this._comp = null;
        this.Log_state = "SignIn"
    }

    handleChange = (e)=>{
        this.setState({[e.target.id]:e.target.value});
    }
    handleAuth = (e) => {
        e.preventDefault();
        Auth.signIn(this.state.email, this.state.password)
            .then((res) => {
                switch (res.challengeName) {
                    case "NEW_PASSWORD_REQUIRED":
                        this.Log_state = "NEWPASS";
                        break;
                    case "SOFTWARE_TOKEN_MFA":
                        this.Log_state = "OTP";
                        break;
                    case "MFA_SETUP":
                        break;
                    case "SMS_MFA":
                        break;
                    default:
                        this.Log_state = "LoggedIn";
                        this.authenticateUser("true");
                }
                this.forceUpdate();

            });
    };
    determineRender() {
        switch (this.Log_state) {
            case 'SignIn':
                this._comp = <SignIn handleAuth={this.handleAuth} handleChange={this.handleChange}/>
                break;
            case 'NEWPASS':
                this._comp=null;
                break;
            case 'MFA_SETUP':
                break;
            case 'OTP':
                break;
            default:
        }
    }
        render() {
            this.determineRender()
            return (<Layout>{
                this._comp
            }</Layout>
            )
        }
    }
    
function mapStateToProps(state) {
    return {
        isAuthenticated: state.Reducer.isAuthenticated,
    }
}
const mapDispatchToProps = dispatch => ({
    authenticateUser: (auth) => dispatch(authenticateUser(auth))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
