import React, { Component } from "react";
import Layout from "../components/layout"
import "../components/bootstrap.css"
import { connect } from 'react-redux';
import { authenticateUser } from '../state/actions';
import { Auth } from "aws-amplify";
import config from "../aws-exports";
import NewPassword from "../components/newPassword";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
Auth.configure(config);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            repeat_pass:"",
            phone:"",
            username:"",
            user: [],
        };
        this.handleAuth = this.handleAuth.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
                        this.setState({
                            user:res
                        })
                        break;
                    case "SOFTWARE_TOKEN_MFA":
                        this.Log_state = "OTP";
                        break;
                    case "MFA_SETUP":
                        break;
                    case "SMS_MFA":
                        break;
                    default:
                        console.log(res);
                        this.Log_state = "LoggedIn";
                        this.props.authenticateUser("true");
                }
                this.forceUpdate();

            },(error)=>{
                switch(error.code){
                    case "UserNotFoundException":
                        alert("User not found Make an account");
                        break;
                    default:

                }
            });
    };
    handlePass=(e)=>{
        e.preventDefault();
        console.log(this.state.user)
        Auth.completeNewPassword(this.state.user,this.state.password)
        .then((res)=>{
            console.log(res);
        },(error)=>{
            console.log(error)
        })
    }
    createAccount=(e)=>{
        e.preventDefault();
        this.Log_state="SIGNUP";
        this.forceUpdate();
    }
    handleCreate=(e)=>{
        e.preventDefault();
        let attributes={username:this.state.username,password:this.state.password,attributes:{email:this.state.email,phone_number:this.state.phone}};
        console.log(attributes);
        Auth.signUp(attributes)
        .then((res)=>{
            this.Log_state="Verify";
        },(error)=>{
            console.log(error);
        })
    }
    determineRender() {
        console.log(this.Log_state);
        switch (this.Log_state) {
            case 'SignIn':
                this._comp = <SignIn handleAuth={this.handleAuth} handleChange={this.handleChange} handleAccount={this.createAccount}/>
                break;
            case 'NEWPASS':
                this._comp=<NewPassword handlePass={this.handlePass} handleChange={this.handleChange}/>
                break;
            case 'MFA_SETUP':
                break;
            case 'OTP':
                break;
            case 'SIGNUP':
                this._comp =<SignUp handleChange={this.handleChange} handleCreate={this.handleCreate} />
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
