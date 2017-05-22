import React from 'react'
import styled from 'styled-components'

import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Logout extends React.Component {

  makeLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    this.props.logout();
  }

  render () {
    return (
      <LogoutWrapper onClick={this.makeLogout.bind(this)}>
          <span className="fa fa-power-off fa-3x" aria-hidden="true" alt="logout"></span>
      </LogoutWrapper>
    )
  }
}


const LogoutWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  width: 4%;
  text-align: center;
  color:rgb(226, 9, 103);
  padding-top: .5%;
  border-top: 1px solid rgb(226, 9, 103);
`

function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(Logout);
