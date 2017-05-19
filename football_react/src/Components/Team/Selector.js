import React from 'react'
import axios from 'axios'
import styled from "styled-components"

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
      return <h2 style={{width: '30%', textAlign: 'center'}} ref="league">{this.props.leagues[this.props.selector.leagueCounter.value].name}</h2>
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
      team: {
            name: this.props.leagues[this.props.selector.leagueCounter.value].teams[this.props.selector.teamCounter.value].name,
            logo: this.props.leagues[this.props.selector.leagueCounter.value].teams[this.props.selector.teamCounter.value].teamLogo,
            league: this.props.leagues[this.props.selector.leagueCounter.value].name,
            leagueId: this.props.leagues[this.props.selector.leagueCounter.value].id
          }
    }

    axios.post("http://localhost:4000/users/addteam", data)
    .then(function(response){
      console.log(response)
      this.props.history.push('/dashboard')
      this.props.chooseTeam(response.data.teamAdded)
    }.bind(this))
    .catch(function(error){console.log(error)})
  }

  render () {
    return(
      <Wrapper>
        <MiniWrapper>
          <Button onClick={()=> this.props.decreaseLeague(this.props.leagues.length)}><i className="fa fa-angle-double-left fa-3x" aria-hidden="true"></i></Button>
          {this.leagueReady()}
          <Button onClick={()=> this.props.increaseLeague(this.props.leagues.length)}><i className="fa fa-angle-double-right fa-3x" aria-hidden="true"></i></Button>
        </MiniWrapper>

        <MiniWrapper>
          <Button onClick={()=> this.props.decreaseTeam(this.selectedLeague.length)} ><i className="fa fa-angle-double-left fa-3x" aria-hidden="true"></i></Button>
          {this.teamOfSelectedLeague()}
          <Button onClick={()=> this.props.increaseTeam(this.selectedLeague.length)}><i className="fa fa-angle-double-right fa-3x" aria-hidden="true"></i></Button>
          <br />
      </MiniWrapper>

      <MiniWrapper>
        <Button backgroundColor={'rgb(7, 5, 51)'} height={'50px'} color={'white'} onClick={this.submit.bind(this)}>Add Team</Button>
    </MiniWrapper>

    </Wrapper>

    )
  }
}

const Wrapper = styled.div`
  width: 60%;
  margin-top: 10%;
  margin-left: auto
  margin-right: auto

`

const MiniWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5%;
`
const Button = styled.button`
  backgroundColor: ${(props) => props.backgroundColor || 'transparent'};
  height: ${(props) => props.height || 'auto'};
  width: 100px;
  border: none;
  outline: none;
  color: ${(props) => props.color || 'black'};
  fontSize: 1em;
`


function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}




export default connect(mapStateToProps, mapDispachToProps)(Selector);
