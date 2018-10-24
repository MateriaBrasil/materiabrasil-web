import React from 'react'

import Session from './Session'
import Title from './Title'
import VideoStyle from './Video'
import Image from './Image'
import Video from '../Video'

export default () => (
  <Session>
    <Title>Como usar</Title>
    <VideoStyle>
      <Video />
    </VideoStyle>
    <Image>
      <img
        src="https://images.template.net/wp-content/uploads/2016/03/17133511/Vector-Infographic-Report-Template-Premium-Download.jpg"
        alt=""
        style={{ maxWidth: '100%', padding: '3%' }}
      />
    </Image>
  </Session>
)
