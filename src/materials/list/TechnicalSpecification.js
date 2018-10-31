import React from 'react'
import InsertChart from '@material-ui/icons/InsertChart'
import IconButtonWithTooltip from '../IconButtonWithTooltip'

export default ({ technicalSpecificationUrl, style }) => (
  <IconButtonWithTooltip
    tooltip="Baixar ficha técnica"
    url={technicalSpecificationUrl}
    style={style}
  >
    <InsertChart color="inherit" />
  </IconButtonWithTooltip>
)
