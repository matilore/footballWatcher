import React, { PropTypes } from 'react'
import axios from 'axios'


class Team extends React.Component {

  constructor(){
    super()
    this.state = {leagues:undefined, selectedLeague: undefined}
  }

  findLeague(){

  }


  componentDidMount(){
    axios.get("http://localhost:4000/leagues")
    .then(function(response){
      console.log(response)
      console.log(this)
      this.setState({leagues: response.data.leagues})
    }.bind(this))
    .catch(function(error){console.log(error)})
  }


  render () {
    return (
      <League leagues={this.state.leagues} findLeague={this.findLeague}/>
    )

  }
}



class League extends React.Component {

  constructor(){
    super()
    this.state = {counter: 0}
  }


  increase(){
    this.setState({counter: (this.state.counter+1) % this.props.leagues.length})
  }

  decrease(){
    // console.log(Math.abs((this.state.counter-1) % this.props.leagues.length))
    this.setState({counter: (((this.state.counter + this.props.leagues.length) -1) % this.props.leagues.length)})
  }

  render () {
    var leagues = this.props.leagues

    if (leagues != undefined) {
      return (
        <div>
          <button value="less" onClick={this.decrease.bind(this)}> &lt; </button>
          <h2 onClick={this.props.findLeague}>{leagues[this.state.counter].name}</h2>
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

  }
}



export default Team;
