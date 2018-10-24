import React from 'react'

import Session from './style/Session'
import Title from './style/Title'
import VideoStyle from './style/Video'
import Image from './style/Image'
import Video from '../Video'

export default props => (
  <Session>
    <Title>Como usar</Title>
    <VideoStyle>
      <Video />
    </VideoStyle>
    <Image>
      <img
        src="https://images.template.net/wp-content/uploads/2016/03/17133511/Vector-Infographic-Report-Template-Premium-Download.jpg"
        alt="placeholder image"
        style={{ maxWidth: '100%', padding: '3%' }}
      />
    </Image>
  </Session>
)
