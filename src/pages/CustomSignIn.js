import React from "react";
import { SignIn } from "aws-amplify-react";
// import { connect } from 'react-redux';
// import {fetchUserInfo} from '../state/actions'

export class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent(theme) {
    return (
      <div className="container">
        <form className="form-signin">
          <div className="mb-4">
            <label
              className="sr-only"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="form-control"
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="sr-only"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="form-control"
              id="password"
              key="password"
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="******************"
            />
            <p className="text-grey-dark text-xs">
              Forgot your password?{" "}
              <a
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => super.changeState("forgotPassword")}
              >
                Reset Password
              </a>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="btn-primary"
              type="button"
              onClick={() => super.signIn()}
            >
              Login
            </button>
            <p className="text-grey-dark text-xs">
              No Account?{" "}
              <a
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => super.changeState("signUp")}
              >
                Create account
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}