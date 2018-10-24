import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ title, value, ...props }) =>
  value ? (
    <div {...props}>
      <Typography variant="h6" style={{ display: 'inline-block' }}>
        {title}:
      </Typography>{' '}
      <Typography variant="subtitle1" style={{ display: 'inline-block' }}>
        {value}
      </Typography>
    </div>
  ) : null
