import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import CloudDownload from '@material-ui/icons/CloudDownload'

export default ({ certificationsUrl, style }) => (
  <IconButton href={certificationsUrl} target="_blank" style={style}>
    <CloudDownload color="inherit" />
  </IconButton>
)
