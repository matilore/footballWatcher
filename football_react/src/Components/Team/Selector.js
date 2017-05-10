import React from 'react'
import axios from 'axios'

// import styled from "styled-components"

import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const URL = "http://localhost:4000"


class Selector extends React.Component {

  componentWillMount(){
    this.props.fetchLeagues()
  }

  leagueReady(){
    if (Object.keys(this.props.leagues).length !== 0) {
      return <h2 ref="league">{this.props.leagues[this.props.selector.leagueCounter.value].name}</h2>
    }
  }

  teamOfSelectedLeague(){
    if (Object.keys(this.props.leagues).length !== 0) {
      this.selectedLeague = this.props.leagues[this.props.selector.leagueCounter.value].teams
      let currentTeamObject = this.props.leagues[this.props.selector.leagueCounter.value].teams[this.props.selector.teamCounter.value]
      return <img style={{width: "200px", height: "200px"}} alt={currentTeamObject.name} src={URL + currentTeamObject.teamLogo} />
    }
  }

  submit(){
    let data = {
      user_token: localStorage.getItem('token'),
      team: this.props.leagues[this.props.selector.leagueCounter.value].teams[this.props.selector.teamCounter.value].name
    }
    axios.post("http://localhost:4000/users/addteam", data)
    .then(function(response){
      this.props.history.push('/dashboard')
    }.bind(this))
    .catch(function(error){console.log(error)})
  }

  render () {
    return(
      <div>
        <div>
          <button onClick={()=> this.props.decreaseLeague(this.props.leagues.length)}> &lt; </button>
          {this.leagueReady()}
          <button onClick={()=> this.props.increaseLeague(this.props.leagues.length)}>></button>
        </div>

        <div>
          <button onClick={()=> this.props.decreaseTeam(this.selectedLeague.length)} > &lt; </button>
          {this.teamOfSelectedLeague()}
          <button onClick={()=> this.props.increaseTeam(this.selectedLeague.length)}>></button>
          <br />
          <button onClick={this.submit.bind(this)}>Submit</button>
      </div>
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
