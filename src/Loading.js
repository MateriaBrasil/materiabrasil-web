import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export default ({ style = {} }) => (
  <div style={{ textAlign: 'center', ...style }}>
    <CircularProgress />
  </div>
)
