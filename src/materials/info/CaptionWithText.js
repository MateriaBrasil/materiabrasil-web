import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ style = { marginBottom: 8 }, caption, text }) => (
  <div style={style}>
    <Typography variant="caption">{caption}</Typography>
    <Typography variant="subtitle1">{text}</Typography>
  </div>
)
