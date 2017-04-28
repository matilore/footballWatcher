import React, { PropTypes } from 'react'
import axios from 'axios'


class Team extends React.Component {

  constructor(){
    super()
    this.state = {leagues:undefined, selectedLeague: undefined}
    this.selectLeague = this.selectLeague.bind(this)
  }


  selectLeague(selectedLeague){
    this.setState({selectedLeague})
  }




  componentDidMount(){
    axios.get("http://localhost:4000/leagues")
    .then(function(response){
      this.setState({leagues: response.data.leagues, selectedLeague: response.data.leagues[0].name})
    }.bind(this))
    .catch(function(error){console.log(error)})
  }


  render () {
    console.log(this.state)
    return (
      <div>
      <League leagues={this.state.leagues} selectLeague={this.selectLeague}/>
      {this.state.selectedLeague &&
        <TeamUI />
      }
      </div>
    )

  }
}



class League extends React.Component {

  constructor(){
    super()
    this.state = {counter: 0}
  }




  increase(){
    this.setState({counter: (this.state.counter+1) % this.props.leagues.length}, () => this.props.selectLeague(this.props.leagues[this.state.counter].name) )

  }

  decrease(){
    this.setState({counter: (((this.state.counter + this.props.leagues.length) -1) % this.props.leagues.length)},() => this.props.selectLeague(this.props.leagues[this.state.counter].name))
  }

  render () {

    var leagues = this.props.leagues

    if (leagues != undefined) {
      return (
        <div>
          <button value="less" onClick={this.decrease.bind(this)}> &lt; </button>
          <h2 ref="league" onClick={this.props.findLeague}>{leagues[this.state.counter].name}</h2>
          <button value="plus" onClick={this.increase.bind(this)}>></button>
        </div>
      )
    } else {
      return null
    }

  }
}


class TeamUI extends React.Component {
  render () {
    return <h3>TEAMSS</h3>
  }
}



export default Team;
