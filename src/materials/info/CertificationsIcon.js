import React from 'react'
import CloudDownload from '@material-ui/icons/CloudDownload'
import IconButtonWithTooltip from '../IconButtonWithTooltip'

export default ({ certificationsUrl, style }) => (
  <IconButtonWithTooltip
    tooltip="Baixar certificações"
    url={certificationsUrl}
    style={style}
  >
    <CloudDownload color="inherit" />
  </IconButtonWithTooltip>
)
