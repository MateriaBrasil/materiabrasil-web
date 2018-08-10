import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'

export default ({ onZoomOut, onZoomIn }) => (
  <div style={{ textAlign: 'center', marginTop: 20 }}>
    <IconButton onClick={onZoomOut}>
      <ZoomOutIcon />
    </IconButton>
    <IconButton onClick={onZoomIn}>
      <ZoomInIcon />
    </IconButton>
  </div>
)
