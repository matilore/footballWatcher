import React from 'react'
import styled from 'styled-components'


import * as actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class YTMenu extends React.Component {

  renderVideos(){
    let menuCounter = this.props.videos.menuCounter;
    return this.props.videos.list.slice(menuCounter, menuCounter + 10).map((video, index)=>{
      return (
        <ImgWrapper key={index}>
          <img onClick={this.props.selectActiveVideo.bind(null, video)} style={{height: '100%', marginLeft: '10%'}} src={video.snippet.thumbnails.medium.url} alt=""/>
        </ImgWrapper>
      )
    })
  }

  render () {
    return (
      <Wrapper id="YTMenu">
        <Button onClick={this.props.previousMenuVideos}><i className="fa fa-angle-double-left fa-3x" aria-hidden="true"></i></Button>
        <VideosWrapper>
          {this.renderVideos()}
        </VideosWrapper>
        <Button onClick={this.props.nextMenuVideos}><i className="fa fa-angle-double-right fa-3x" aria-hidden="true"></i></Button>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 30%
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const ImgWrapper = styled.div`
  width: 20%;
  height: 42%
`

const VideosWrapper = styled.div`
  margin-top: 2%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`

const Button = styled.button`
  backgroundColor: ${(props) => props.backgroundColor || 'transparent'};
  height: ${(props) => props.height || 'auto'};
  width: 10%;
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

export default connect(mapStateToProps, mapDispachToProps)(YTMenu);
