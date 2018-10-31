import React from 'react'
import InsertChart from '@material-ui/icons/InsertChart'
import IconButtonWithTooltip from './IconButtonWithTooltip'

export default ({ url, style, tooltip }) => (
  <IconButtonWithTooltip tooltip={tooltip} url={url} style={style}>
    <InsertChart color="inherit" />
  </IconButtonWithTooltip>
)
