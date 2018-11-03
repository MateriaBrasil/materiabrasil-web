import React from 'react'

export default props => (
  <iframe
    src="https://player.vimeo.com/video/140946149?title=0&byline=0&portrait=0"
    frameBorder="0"
    width="100%"
    height="100%"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen="true"
    title="Vídeo de introdução ao Materia Brasil"
    style={{
      maxWidth: '960',
      maxHeight: '540',
      position: 'absolute',
      top: 0,
      left: 0,
      border: 0,
      width: '100%',
      height: '100%',
    }}
  />
)
