import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailErrorMessage: '',
      passwordErrorMessage: '',
    };
  }

  validateEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email) ? '' : 'Invalid email address.';
  }

  validatePassword(password) {
    if (password.length === 0) {
      return 'Password is required.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const emailErrorMessage = this.validateEmail(email);
    const passwordErrorMessage = this.validatePassword(password);

    this.setState({
      emailErrorMessage,
      passwordErrorMessage,
    });

    if (emailErrorMessage || passwordErrorMessage) {
      return; 
    }
    this.setState({
      emailErrorMessage: '',
      passwordErrorMessage: '',
    });
  };

  render() {
    const { emailErrorMessage, passwordErrorMessage } = this.state;

    return (
      <div className="login-backgrounds">
        <div className="login-container">
          <form onSubmit={this.handleSubmit}>
            <h3>Log In</h3>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={this.handleEmailChange}
              />
              {emailErrorMessage && (
                <div className="text-danger">{emailErrorMessage}</div>
              )}
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.handlePasswordChange}
              />
              {passwordErrorMessage && (
                <div className="text-danger">{passwordErrorMessage}</div>
              )}
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
