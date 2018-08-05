import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ title, value, ...props }) =>
  value && (
    <div {...props}>
      <Typography variant="title" style={{ display: 'inline-block' }}>
        {title}:
      </Typography>{' '}
      <Typography variant="subheading" style={{ display: 'inline-block' }}>
        {value}
      </Typography>
    </div>
  )
