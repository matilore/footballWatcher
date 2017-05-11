import React from 'react'
import styled from 'styled-components'


import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class LateralBar extends React.Component {
  render () {
    return (
      <Wrapper>

      </Wrapper>
    )
  }
}

function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}


const Wrapper = styled.div`
  width: 20%;
  height: 100vh;
  border: 1px solid black;
`


export default connect(mapStateToProps, mapDispachToProps)(LateralBar);
