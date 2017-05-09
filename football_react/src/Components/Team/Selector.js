import React from 'react'
import axios from 'axios'
import styled from "styled-components"

import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TeamSelector from "./TeamSelector"

class Selector extends React.Component {

  componentWillMount(){
    this.props.fetchLeagues()
  }


  render () {
    return(
      <div>
        <button> &lt; </button>
        <h2 ref="league">{this.props.leagues[this.state.leagueCounter].name}</h2>
        <button>></button>
        <TeamSelector />
      </div>

    )
  }
}


function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}




export default connect(mapStateToProps, mapDispachToProps)(Selector);
