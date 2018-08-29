import React from 'react'
import Ratio from 'react-ratio'

export default ({ width, height, ...props }) => (
  <Ratio
    ratio={width / height}
    style={{ overflow: 'hidden', maxWidth: width, maxHeight: height }}
    {...props}
  />
)
