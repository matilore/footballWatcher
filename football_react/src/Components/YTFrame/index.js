import React from 'react'
import styled from 'styled-components'

let loadYT;

class YTFrame extends React.Component {

  componentDidMount () {
    if (!loadYT) {
      loadYT = new Promise((resolve) => {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        window.onYouTubeIframeAPIReady = () => resolve(window.YT)
      })
    }
    loadYT.then((YT) => {
      console.log(YT)
      this.player = new YT.Player(this.youtubePlayerAnchor, {
        height: this.props.height || '100%',
        width: this.props.width || '70%',
        videoId: 'arsvU5a0cCQ', //this.props.YTid,
        events: {
          onStateChange: this.onPlayerStateChange
        }
      })
    })
  }

  onPlayerStateChange = (e) => {
    if (typeof this.props.onStateChange === 'function') {
      this.props.onStateChange(e)
    }
  }

  render () {
    return (
      <Wrapper className='youtubeComponent-wrapper'>
        <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default YTFrame;
