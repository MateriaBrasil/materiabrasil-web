import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default ({ headline, title, alt, style, fullWidth, ...props }) => (
  <Grid
    item
    xs={fullWidth ? 12 : 4}
    md={3}
    lg={2}
    style={{
      textAlign: 'center',
    }}
  >
    <Typography
      variant="h4"
      style={{ paddingTop: 30, paddingLeft: 30, height: 70, textAlign: 'left' }}
    >
      {headline}
    </Typography>
    <img
      {...props}
      title={title || alt}
      alt={alt || title}
      style={{ width: '100%', maxWidth: '170px', ...style }}
    />
  </Grid>
)
