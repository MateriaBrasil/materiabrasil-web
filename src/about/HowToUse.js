import React from 'react'

import Session from './style/Session'
import TitleStyle from './style/TitleStyle'
import VideoStyle from './style/VideoStyle'
import ImageStyle from './style/ImageStyle'
import Video from '../Video'

export default props => (
  <Session>
    <TitleStyle>Como usar</TitleStyle>
    <VideoStyle>
      <Video />
    </VideoStyle>
    <ImageStyle>
      <img
        src="https://images.template.net/wp-content/uploads/2016/03/17133511/Vector-Infographic-Report-Template-Premium-Download.jpg"
        alt="placeholder image"
        style={{ maxWidth: '100%', padding: '3%' }}
      />
    </ImageStyle>
  </Session>
)
