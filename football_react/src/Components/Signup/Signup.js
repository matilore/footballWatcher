import React, { PropTypes } from 'react'
import axios from 'axios'

class Signup extends React.Component {


  checkPass(event){
    if(this.refs.password.value != event.target.value){
      event.target.style.outlineColor = "red"
    } else {
      event.target.style.outlineColor = "green"
    }
  }

  submit(){

    let user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }


    axios.post('http://localhost:4000/signup',
    user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render () {
    return (
      <div>
        <label>email</label><input ref="email" type="text"/><br/>
        <label>password</label><input ref="password" type="password" /><br/>
        <label>repeat password</label><input onChange={this.checkPass.bind(this)} ref="r_password" type="password" /><br/>
        <button ref="button" onClick={this.submit.bind(this)}>Signup</button>
      </div>
    )

  }
}

export default Signup;
