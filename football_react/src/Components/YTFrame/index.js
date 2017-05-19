import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'

import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class YTFrame extends React.Component {
  render() {
    const opts = {
      height: '490',
      width: '740',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      }
    };

    return (
      <Wrapper>
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </Wrapper>

    );
  }
}

const Wrapper = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`


  function mapStateToProps(state){
    return state
  }


  function mapDispachToProps(dispatch){
    return bindActionCreators({ ...actionCreators}, dispatch)
  }

  export default connect(mapStateToProps, mapDispachToProps)(YTFrame);
