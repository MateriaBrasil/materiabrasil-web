import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import InsertChart from '@material-ui/icons/InsertChart'
import Tooltip from '@material-ui/core/Tooltip'

export default ({ url, style, tooltip }) => (
  <Tooltip title={tooltip}>
    <IconButton href={url} target="_blank" style={style}>
      <InsertChart color="inherit" />
    </IconButton>
  </Tooltip>
)
