import React from 'react'

import Section from '../Section'
import Title from '../Title'
import Video from '../../Video'
import VideoStyle from './VideoStyle'

export default () => (
  <Section
    id="how_to_use"
    backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-3.jpg')"
  >
    <Title>Como usar</Title>
    <VideoStyle>
      <Video />
    </VideoStyle>
  </Section>
)
