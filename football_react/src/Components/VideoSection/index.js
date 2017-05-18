import React from 'react'
import styled from 'styled-components'

import YTFrame from '../YTFrame'
import YTMenu from '../YTMenu'


import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class VideoSection extends React.Component {
  render () {
    console.log(this.props.videos)
    return (
      <Main id="main">
        <YTFrame YTid={'iDWFPxBYYA0'}></YTFrame>
        <YTMenu />
      </Main>
    )
  }
}

const Main = styled.div`
  width: 95%;
  display: flex;
  flexDirection: column;
`


function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(VideoSection);
