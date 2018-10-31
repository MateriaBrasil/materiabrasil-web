import React from 'react'
import CloudDownload from '@material-ui/icons/CloudDownload'
import IconButtonWithTooltip from './IconButtonWithTooltip'

export default ({ url, style, tooltip }) => (
  <IconButtonWithTooltip tooltip={tooltip} url={url} style={style}>
    <CloudDownload color="inherit" />
  </IconButtonWithTooltip>
)
