import React from 'react'
import Typography from '@material-ui/core/Typography'
import Colors from '../Colors'

export default ({ style, color, ...props }) => (
  <Typography
    {...props}
    style={{
      textAlign: 'center',
      color: color ? color : Colors.white,
      fontWeight: 500,
      ...style,
    }}
  />
)
