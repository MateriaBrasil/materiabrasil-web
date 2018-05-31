import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ style, ...props }) => (
  <div style={{ ...style, padding: 20, textAlign: 'center' }}>
    <Typography color="error" variant="headline" {...props} />
  </div>
)
