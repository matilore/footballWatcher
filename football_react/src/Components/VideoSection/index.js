import React from 'react'
import styled from 'styled-components'

import YTFrame from '../YTFrame'
import YTMenu from '../YTMenu'


class VideoSection extends React.Component {
  render () {
    return (
      <Main id="main">
        <YTFrame></YTFrame>
        <YTMenu />
      </Main>
    )
  }
}

const Main = styled.div`
  width: 95%;
  display: flex;
  flexDirection: column;
`

export default VideoSection;
