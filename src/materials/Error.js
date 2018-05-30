import React from 'react'

import Info from './Info'

export default ({ style, ...props }) => (
  <Info style={{ ...style }} color="error" {...props} />
)
