import React from 'react'
import Grid from '@material-ui/core/Grid'

import Colors from '../Colors'

export default props => {
  return (
    <Grid
      container
      style={{
        background: props.backgroundImage || Colors.grayNurse,
        backgroundPosition: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
        paddingRight: '5%',
        paddingLeft: '5%',
        backgroundSize: 'cover',
        alignContent: 'center',
      }}
    >
      {props.children}
    </Grid>
  )
}
