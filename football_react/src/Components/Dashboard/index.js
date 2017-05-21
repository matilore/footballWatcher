import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import VideoSection from '../VideoSection'
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
      this.props.addUserToDashboard(user)
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }


  render () {


    return (
      <Wrapper>
        <LateralBar history={this.props.history} />
        <VideoSection/>
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`
  width: 100%
  display: flex;
`


function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}


export default connect(mapStateToProps, mapDispachToProps)(Dashboard);
