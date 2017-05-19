import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import {FormGroup, ControlLabel, FormControl } from 'react-bootstrap'


class Signup extends React.Component {


  submit(){

    let user = {
      email: this.email.value,
      password: this.password.value
    }
    console.log(user)



    axios.post('http://localhost:4000/signup',
    user)
    .then(function (response) {
      if (response.data.token !== undefined) {
        localStorage.setItem('token', response.data.token)
        this.props.history.push('/team')
      }
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }


  render () {
    return (
      <Wrapper>
        <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              inputRef={ref => {this.email = ref}}
              placeholder="email"
            />
          <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              inputRef={ref => {this.password = ref}}
              placeholder="password"
            />
          <ControlLabel>Password Confirmation</ControlLabel>
            <FormControl
              type="password"
              inputRef={ref => {this.r_password = ref}}
              placeholder="password confirmation"
            />
            <button ref="button" onClick={this.submit.bind(this)}>Signup</button>
          </FormGroup>
      </Wrapper>

    )

  }
}

const Wrapper = styled.div`
  width: 60%;
  margin-top: 10%;
  margin-left: auto
  margin-right: auto

`

export default Signup;
