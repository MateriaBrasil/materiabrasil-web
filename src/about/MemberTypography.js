import React from 'react'
import Typography from '@material-ui/core/Typography'
import Colors from '../Colors'

export default props => (
  <Typography
    style={{
      textAlign: 'center',
      color: props.color ? props.color : Colors.white,
      fontWeight: 500,
    }}
  >
    {props.children}
  </Typography>
)
