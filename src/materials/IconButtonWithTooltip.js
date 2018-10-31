import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

export default props => (
  <Tooltip title={props.tooltip}>
    <IconButton href={props.url} target="_blank" style={props.style}>
      {props.children}
    </IconButton>
  </Tooltip>
)
