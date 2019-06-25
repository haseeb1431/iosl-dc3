import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Main from '../Main';

import { GoogleLogin } from 'react-google-login';
//https://medium.com/@alexanderleon/implement-social-authentication-with-react-restful-api-9b44f4714fa

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isAuthenticated: false,
      user: null, //store it in the memroy to make it persisent across session
      token: ''
    };
    if (localStorage.getItem('googleAuth')) {
      var userObj = JSON.parse(localStorage.getItem('googleAuth'));

      this.state = {
        email: userObj.profileObj.email,
        password: "",
        isAuthenticated: true,
        user: userObj.profileObj, //store it in the memroy to make it persisent across session
        token: userObj.accessToken
      };
    } else {
      this.state = {
        email: "",
        password: "",
        isAuthenticated: false,
        user: null, //store it in the memroy to make it persisent across session
        token: ''
      };
    }
  };

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null })
  };

  sendRequest = () => {

    var response = JSON.parse(localStorage.getItem('googleAuth'));
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });

    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };

    debugger;

    /*fetch('http://localhost:8000/auth/google', options).then(resp => {

      if (resp.status < 400) {
        debugger; //TODO
        const token = resp.headers.get('x-auth-token');
        resp.json().then(user => {
          if (token) {
            this.setState({ isAuthenticated: true, user, token });
            this.authHandler(true);
          }
        });
      }
    });*/
  };

  sendRequestSample = () => {

    const options = {
      headers: {
        'Authorization': this.state.token,
      },
      method: 'GET'
    };

    fetch('http://localhost:8000/packages', options).then(resp => {

      if (resp.status < 400) {
        debugger; //TODO
        const token = resp.headers.get('x-auth-token');
        resp.json().then(user => {
          if (token) {
            this.setState({ isAuthenticated: true, user, token })
          }
        });
      }
    });
  };

  googleResponse = (response) => {

    //use session storage
    localStorage.setItem('googleAuth', JSON.stringify(response));
    this.setState({
      isAuthenticated: true,
      token: response.accessToken,
      user: response.profileObj
    });
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    //TODO
    if (this.state.email == "admin@dhl.com") {
      this.props.history.push('/company');
    }
    else if (this.state.email == "postman@dhl.com") {
      this.props.history.push('/postman');
    }
    else {
      this.props.history.push('/Dashboard');
    }
  }

  render() {
    let content = this.state.isAuthenticated ?
      (
        <div>
          <Main userInfo={this.state.user} logout={this.logout}/>          
        </div>
      ) :
      (
        <div>
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  autoFocus
                  type="email"
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
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
            </Button>
            </form>
          </div>

          <div>
            <div className="Login">
              <GoogleLogin
                clientId="204559914410-83fsef9pb97suhi6o550uqeo2utb8591.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.googleResponse}
                onFailure={this.googleResponse}
              />
            </div>
          </div>
        </div>
      );

    return (
      <div>
        {content}
      </div>
    );
  }
}

