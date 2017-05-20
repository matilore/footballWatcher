import React from 'react'
import styled from 'styled-components'

import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

var Loader = require('halogen/PulseLoader');

class Spinner extends React.Component {
  render() {
    let sentence;
    if (Object.keys(this.props.selectedTeam).length == 0) {
      sentence = "Please, select a team from the left"
    } else {
      sentence = "Now just choose one of the videos below"
    }
    return (
      <Wrapper>
        <h1 style={{margin: '100px', justifyContent: "center"}} className="animated infinite pulse" >{sentence}</h1>
        <Loader color="purple" size="25px" margin="10px"/>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  height: 70%;
  display: flex;
  flexDirection: column;
  align-items: center;
  justify-content: center;
`
function mapStateToProps(state){
  return {
    selectedTeam: state.videos.selectedTeam,
    selectedVideo: state.videos.selectedVideo
  }
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(Spinner);
