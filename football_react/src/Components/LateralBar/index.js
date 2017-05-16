import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'


import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const URL = "http://localhost:4000"


class LateralBar extends React.Component {
  constructor(props){
    super(props)
    this.teams = props.user.teams
    console.log(props.user.teams)

  }

  clickForRemove(event) {
    setTimeout(()=>{
      confirm('are you sure you wanna remove this team')
    }, 100)
    event.target.className += ' infinite tada'
    event.target.style.filter += "alpha(opacity=50)";
    event.target.style.opacity += "0.5";
  }

  showTeamsLogo(){
    if (this.props.user.teams) {
      return this.props.user.teams.map((team) =>{
        return (
          <Team key={team.name}>
            <img className='animated' onDoubleClick={this.clickForRemove} src={URL + team.logo} alt={team.name} key={team.name} style={{maxHeight: '80%', maxWidth: "100%"}}/>
        </Team>
        )
      })
    }
  }


  render () {
    console.log(this.props.user.teams)

    return (
      <Wrapper>
        {this.showTeamsLogo()}
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



export default connect(mapStateToProps, mapDispachToProps)(LateralBar);
