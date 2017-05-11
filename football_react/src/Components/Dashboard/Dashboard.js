import React from 'react'
import axios from 'axios'

import LateralBar from '../LateralBar'

import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Dashboard extends React.Component {


  componentWillMount(){
    let token = localStorage.getItem('token')

    axios.post('http://localhost:4000', {token})
    .then(function (response) {
      let user = response.data.user
      console.log(user)
      this.props.addUserToDashboard(user)
    }.bind(this))
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

function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}


export default connect(mapStateToProps, mapDispachToProps)(Dashboard);
