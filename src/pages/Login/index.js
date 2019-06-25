import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Main from '../Main';

import { GoogleLogin } from 'react-google-login';
//https://medium.com/@alexanderleon/implement-social-authentication-with-react-restful-api-9b44f4714fa

export default class Login extends Component {
  constructor(props) {
    super(props);


    if (sessionStorage.getItem('userAuth')) {
      var userObj = JSON.parse(sessionStorage.getItem('userAuth'));
      var token = JSON.parse(sessionStorage.getItem('userAuthToken'));
      this.state = {
        email: userObj.Email,
        password: "",
        isAuthenticated: true,
        user: userObj, 
        token: token
      };
    } else {
      this.state = {
        email: "",
        password: "",
        isAuthenticated: false,
        user: null, 
        token: ''
      };
    }
  };

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null })
  };


  googleResponse = (response) => {

    sessionStorage.setItem('googleAuth', JSON.stringify(response));
    
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });

    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };

    //send the request to back-end, get the token
    fetch('http://localhost:8000/auth/google', options).then(resp => {

      if (resp.status < 400) {
        const token = resp.headers.get('x-auth-token');
        resp.json().then(user => {
          if (token) {
            sessionStorage.setItem('userAuth',JSON.stringify(user));
            sessionStorage.setItem('userAuthToken',JSON.stringify(token));

            this.setState({ isAuthenticated: true, user, token });            
          }
        });
      }
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

  checkLogin = async (email, password) => {
    let self = this;
    fetch('http://localhost:8000/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password,
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {

      if (data && data.length > 0) {

        let user = data[0];
        SetPersonType(user);

        switch (global.PersonType) {

          case 1: self.props.history.push('/Dashboard'); break;
          case 2: self.props.history.push('/company'); break;
          case 3: self.props.history.push('/postman'); break;
          default:
            self.setState({ loginfailed: true });
            break;
        }
      }
      else {
        self.setState({ loginfailed: true });
      };
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

