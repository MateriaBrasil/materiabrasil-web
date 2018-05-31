import React from 'react'
import Typography from '@material-ui/core/Typography'

const Info = ({ style, ...props }) => (
  <div style={{ ...style, padding: 20, textAlign: 'center' }}>
    <Typography variant="headline" {...props} />
  </div>
)

export default Info
