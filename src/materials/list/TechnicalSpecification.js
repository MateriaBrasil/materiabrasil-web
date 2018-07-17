import React from 'react'
import CloudDownload from '@material-ui/icons/CloudDownload'
import Typography from '@material-ui/core/Typography'

export default ({ technicalSpecificationUrl }) => (
  <a
    href={technicalSpecificationUrl}
    target="_blank"
    style={{
      display: 'inline-block',
      textDecoration: 'none',
      marginRight: 24,
      color: 'white',
    }}
  >
    <CloudDownload
      color="inherit"
      style={{ verticalAlign: 'middle', marginRight: 8 }}
    />
    <Typography
      variant="body1"
      color="inherit"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      Ficha técnica
    </Typography>
  </a>
)
