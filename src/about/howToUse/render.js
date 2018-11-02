import React from 'react'

import Session from '../Session'
import Title from '../Title'
import Video from '../../Video'
import VideoStyle from './VideoStyle'

export default () => (
  <Session
    id="how_to_use"
    backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-3.jpg')"
  >
    <Title>Como usar</Title>
    <VideoStyle>
      <Video />
    </VideoStyle>
  </Session>
)
