import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import CloudDownload from '@material-ui/icons/CloudDownload'
import Tooltip from '@material-ui/core/Tooltip'

export default ({ url, style, tooltip }) => (
  <Tooltip title={tooltip}>
    <IconButton href={url} target="_blank" style={style}>
      <CloudDownload color="inherit" />
    </IconButton>
  </Tooltip>
)
