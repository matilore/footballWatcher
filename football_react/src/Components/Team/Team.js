import React from 'react'
import axios from 'axios'
import styled from "styled-components"


class Team extends React.Component {

  constructor(){
    super()
    this.state = {leagues:undefined,
                  selectedLeague: undefined,
                  selectedTeam:undefined}
    this.selectLeague = this.selectLeague.bind(this)
    this.selectTeam = this.selectTeam.bind(this)

  }

  selectLeague(selectedLeague){
    this.setState({selectedLeague, teamReset:0})
  }

  selectTeam(selectedTeam){
    this.setState({selectedTeam})
  }

  componentDidMount(){
    axios.get("http://localhost:4000/leagues")
    .then(function(response){
      this.setState({leagues: response.data.leagues, selectedLeague: response.data.leagues[0], selectedTeam: response.data.leagues[0].teams[0]})
    }.bind(this))
    .catch(function(error){console.log(error)})
  }


  render () {
    return (
      <div>
        <LeagueAndTeam   leagues={this.state.leagues}
                         selectLeague={this.selectLeague}
                         selectedLeague={this.state.selectedLeague}
                         selectTeam={this.selectTeam}/>
      </div>
    )

  }
}


const URL = "http://localhost:4000"


class LeagueAndTeam extends React.Component {

  constructor(){
    super()
    this.state={leagueCounter:0, teamCounter:0}
  }

  increase(prop, callback){
    this.setState({teamCounter:0, leagueCounter: (this.state.leagueCounter+1) % prop.length}, () => callback(prop[this.state.leagueCounter]) )
  }

  decrease(prop, callback){
    this.setState({teamCounter:0, leagueCounter: (((this.state.leagueCounter + prop.length) -1) % prop.length)},() => callback(prop[this.state.leagueCounter]))
  }

  increaseTeam(prop, callback){
    this.setState({teamCounter: (this.state.teamCounter+1) % prop.length}, () => callback(prop[this.state.teamCounter]) )
  }

  decreaseTeam(prop, callback){
    this.setState({teamCounter: (((this.state.teamCounter + prop.length) -1) % prop.length)},() => callback(prop[this.state.teamCounter]))
  }

  render () {

    var leagues = this.props.leagues

    if (leagues != undefined) {
      return (
        <div>
          <div>
            <button value="less" onClick={this.decrease.bind(this, leagues, this.props.selectLeague)}> &lt; </button>
            <h2 ref="league">{leagues[this.state.leagueCounter].name}</h2>
            <button value="plus" onClick={this.increase.bind(this, leagues, this.props.selectLeague)}>></button>
          </div>
          <div>
            <button value="less" onClick={this.decreaseTeam.bind(this, this.props.selectedLeague.teams, this.props.selectTeam)}> &lt; </button>
            <img style={{width: "200px", height: "200px"}} src={URL + this.props.selectedLeague.teams[this.state.teamCounter].teamLogo} />
            <button value="plus" onClick={this.increaseTeam.bind(this, this.props.selectedLeague.teams, this.props.selectTeam)}>></button>
          </div>
        </div>
      )
    } else {
      return null
    }

  }
}




export default Team;
