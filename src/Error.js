import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ style, children, ...props }) =>
  children ? (
    <div style={{ ...style, padding: 20, textAlign: 'center' }}>
      <Typography color="error" variant="headline" {...props}>
        {children}
      </Typography>
    </div>
  ) : null
