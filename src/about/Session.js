import React from 'react'
import Grid from '@material-ui/core/Grid'

export default props => {
  return (
    <Grid
      container
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1227648/pexels-photo-1227648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundPosition: 'center',
        paddingTop: '35px',
        backgroundSize: 'cover',
      }}
    >
      {props.children}
    </Grid>
  )
}
