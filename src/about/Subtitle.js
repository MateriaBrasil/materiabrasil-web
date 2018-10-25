import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default props => (
  <Grid
    item
    xs={12}
    style={{
      position: 'relative',
      padding: '0 0',
      margin: '0 0',
      textAlign: 'center',
    }}
  >
    <Typography
      variant="h5"
      color="inherit"
      padding="0 0"
      style={{
        color: '#fff',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginTop: '5%',
        fontWeight: 500,
      }}
    >
      {props.children}
    </Typography>
  </Grid>
)
