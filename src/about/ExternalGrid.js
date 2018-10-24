import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextTitle from './TextTitle'

export default (props => {
  return (
    <Grid
      container
      style={{
        backgroundImage: 'url("https://picsum.photos/g/1920/900/?random")',
        backgroundPosition: 'center',
        paddingTop: '35px',
        backgroundSize: 'cover',
      }}
    >
      {props.children}
    </Grid>
  )
})
