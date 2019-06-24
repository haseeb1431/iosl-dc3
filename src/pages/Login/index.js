import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Alert } from "react-bootstrap";
import { len } from "gl-matrix/src/gl-matrix/vec3";
import SetPersonType from '../globals'


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginFailed: false
    };
  }

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
    this.checkLogin(this.state.email, this.state.password);
  }

  render() {
    return (
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
        <Alert variant="danger" className={this.state.loginfailed ? 'visible' : 'hidden'}>
          Login failed, Please try again
          </Alert>
      </div>
    );
  }
}

