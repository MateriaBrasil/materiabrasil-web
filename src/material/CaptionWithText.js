import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ style, caption, text }) => (
  <div style={style}>
    <Typography variant="caption">{caption}</Typography>
    <Typography variant="subheading">{text}</Typography>
  </div>
)
