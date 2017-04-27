import React, { PropTypes } from 'react'
import axios from 'axios'

class Login extends React.Component {



  submit(){

    let user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }


    axios.post('http://localhost:4000/login',
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
        <button ref="button" onClick={this.submit.bind(this)}>Login</button>
      </div>
    )

  }
}

export default Login;
