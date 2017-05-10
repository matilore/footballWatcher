import React from 'react'
import axios from 'axios'
import styled from "styled-components"


import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const URL = "http://localhost:4000"



class TeamSelector extends React.Component {


  teamOfSelectedLeague(){
    if (Object.keys(this.props.leagues).length != 0) {
      this.selectedLeague = this.props.leagues[this.props.selector.leagueCounter.value].teams
      return <img style={{width: "200px", height: "200px"}} src={URL + this.props.leagues[this.props.selector.leagueCounter.value].teams[this.props.selector.teamCounter.value].teamLogo} />
    }
  }

  submit(){
    let data = {
      user_token: localStorage.getItem('token'),
      team: this.props.leagues[this.props.selector.leagueCounter.value].teams[this.props.selector.teamCounter.value].name
    }

    axios.post("http://localhost:4000/users/addteam", data)
    .then(function(response){
      console.log(response)
    }.bind(this))
    .catch(function(error){console.log(error)})
  }

  render () {


    return (
      <div>
        <button onClick={()=> this.props.decreaseTeam(this.selectedLeague.length)} > &lt; </button>
        {this.teamOfSelectedLeague()}
        <button onClick={()=> this.props.increaseTeam(this.selectedLeague.length)}>></button>
        <br />
        <button onClick={this.submit.bind(this)}>Submit</button>
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




export default connect(mapStateToProps, mapDispachToProps)(TeamSelector);
