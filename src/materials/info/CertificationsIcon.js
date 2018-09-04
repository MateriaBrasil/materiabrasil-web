import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import CloudDone from '@material-ui/icons/CloudDone'

export default ({ certificationsUrl, style }) => (
  <IconButton href={certificationsUrl} target="_blank" style={style}>
    <CloudDone color="inherit" />
  </IconButton>
)
