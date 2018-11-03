import React from 'react'
import Typography from '@material-ui/core/Typography'
import Colors from '../Colors'

export default ({ style, ...props }) => (
  <Typography
    {...props}
    style={{
      textAlign: 'center',
      color: props.color ? props.color : Colors.white,
      fontWeight: 500,
      ...style,
    }}
  />
)
