import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Colors from '../Colors'

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
      variant="h6"
      color="inherit"
      padding="0 0"
      style={{
        color: Colors.white,
        display: 'inline-block',
        verticalAlign: 'middle',
        marginTop: '2%',
        marginBottom: '2%',
        fontWeight: 600,
      }}
    >
      {props.children}
    </Typography>
  </Grid>
)
