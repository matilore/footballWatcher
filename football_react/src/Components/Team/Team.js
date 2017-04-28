import React, { PropTypes } from 'react'
import axios from 'axios'
import styled from "styled-components"


class Team extends React.Component {

  constructor(){
    super()
    this.state = {leagues:undefined, selectedLeague: undefined, selectedTeam:undefined}
    this.selectLeague = this.selectLeague.bind(this)
    this.selectTeam = this.selectTeam.bind(this)

  }


  selectLeague(selectedLeague){
    this.setState({selectedLeague})
  }

  selectTeam(selectedTeam){
    this.setState({selectedTeam})
  }


  componentDidMount(){
    axios.get("http://localhost:4000/leagues")
    .then(function(response){
      this.setState({leagues: response.data.leagues, selectedLeague: response.data.leagues[0]})
    }.bind(this))
    .catch(function(error){console.log(error)})
  }


  render () {
    console.log(this.state)
    return (
      <div>
      <League leagues={this.state.leagues} selectLeague={this.selectLeague}/>
      {this.state.selectedLeague &&
        <TeamUI selectedLeague={this.state.selectedLeague} selectTeam={this.selectTeam}/>
      }
      </div>
    )

  }
}


class Selector extends React.Component {

  constructor(){
    super()
    this.state = {counter: 0}
  }



  increase(prop, callback){
    this.setState({counter: (this.state.counter+1) % prop.length}, () => callback(prop[this.state.counter]) )

  }

  decrease(prop, callback){
    this.setState({counter: (((this.state.counter + prop.length) -1) % prop.length)},() => callback(prop[this.state.counter]))
  }

}



class League extends Selector {


  render () {

    var leagues = this.props.leagues

    if (leagues != undefined) {
      return (
        <div>
          <button value="less" onClick={this.decrease.bind(this, this.props.leagues, this.props.selectLeague)}> &lt; </button>
          <h2 ref="league" onClick={this.props.findLeague}>{leagues[this.state.counter].name}</h2>
          <button value="plus" onClick={this.increase.bind(this, this.props.leagues, this.props.selectLeague)}>></button>
        </div>
      )
    } else {
      return null
    }

  }
}

const URL = "http://localhost:4000"

class TeamUI extends Selector {


  render () {
    console.log(this.props)
    return (
      <div>
        <button value="less" onClick={this.decrease.bind(this, this.props.selectedLeague.teams, this.props.selectTeam)}> &lt; </button>
          <img style={{width: "200px", height: "200px"}} src={URL + this.props.selectedLeague.teams[this.state.counter].teamLogo} />
        <button value="plus" onClick={this.increase.bind(this, this.props.selectedLeague.teams, this.props.selectTeam)}>></button>
      </div>
    )
  }
}



export default Team;
