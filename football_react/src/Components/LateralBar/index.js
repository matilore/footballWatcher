import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

import axios from 'axios'


import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const URL = "http://localhost:4000"


class LateralBar extends React.Component {
  constructor(props){
    super(props)
    this.teams = props.user.teams
  }


  clickForRemove(event) {
    let target = event.target
    let defaultStyle = event.target.style
    let defaultClass = target.className

    setTimeout(()=>{
      var answer = confirm('are you sure you wanna remove this team');
      if (answer === true) {
        let data = {
          user_token: localStorage.getItem('token'),
          teamName: target.id
        }
        this.props.removeTeamFromUser(data)
      } else {
          target.className = defaultClass
          target.style.filter = "none";
          target.style.opacity = "1";
      }
    }, 100)
    event.target.className += ' infinite tada'
    event.target.style.filter = "alpha(opacity=50)";
    event.target.style.opacity = "0.5";
  }

  showTeamsLogo(){

    if (this.props.user.teams) {
      return this.props.user.teams.map((team) =>{

        return (
          <Team key={team.name}>
            <img className='animated' onClick={this.props.selectActiveTeam.bind(null, team)} onDoubleClick={this.clickForRemove.bind(this)} src={URL + team.logo} alt={team.name} id={team.name} key={team.name} style={{maxHeight: '80%', maxWidth: "100%"}}/>
          </Team>
        )
      })
    }
  }


  render () {


    return (
      <Wrapper>
        {this.showTeamsLogo()}
        <Span onClick={()=> {this.props.history.push('/team')}} className="fa fa-plus-square-o fa-3x" aria-hidden="true"></Span>
      </Wrapper>
    )
  }
}

function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}


const Wrapper = styled.div`
  width: 5%;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  flexDirection: column;
  align-items: center;
`

const Team = styled.div`
  width: 80%;
  height: 50px;
  margin-top: 30%;
  display: flex;
  justify-content: center;
`
const Span = styled.span`
  margin-top: 20px;
  `


export default connect(mapStateToProps, mapDispachToProps)(LateralBar);
