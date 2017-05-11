import React from 'react'
import axios from 'axios'

import LateralBar from '../LateralBar'

class Dashboard extends React.Component {


  componentWillMount(){
    let token = localStorage.getItem('token')

    axios.post('http://localhost:4000/', {token})
    .then(function (response) {
      console.log(response)
      })
    .catch(function (error) {
      console.log(error);
    });
  }


  render () {


    return <div>
      <LateralBar />
    </div>
  }
}

export default Dashboard;
