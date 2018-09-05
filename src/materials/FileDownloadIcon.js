import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import CloudDownload from '@material-ui/icons/CloudDownload'

export default ({ url, style }) => (
  <IconButton href={url} target="_blank" style={style}>
    <CloudDownload color="inherit" />
  </IconButton>
)
