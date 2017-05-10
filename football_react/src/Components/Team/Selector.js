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

  leagueReady(){
    if (Object.keys(this.props.leagues).length != 0) {
      return <h2 ref="league">{this.props.leagues[this.props.selector.leagueCounter.value].name}</h2>
    }
  }

  render () {
    return(
      <div>
        <button onClick={()=> this.props.decreaseLeague(this.props.leagues.length)}> &lt; </button>
        {this.leagueReady()}
        <button onClick={()=> this.props.increaseLeague(this.props.leagues.length)}>></button>
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
