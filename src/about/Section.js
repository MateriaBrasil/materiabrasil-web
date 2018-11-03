import React from 'react'
import Grid from '@material-ui/core/Grid'

import Colors from '../Colors'

export default ({ style, backgroundImage, ...props }) => {
  return (
    <Grid
      container
      {...props}
      style={{
        background: backgroundImage || Colors.grayNurse,
        backgroundPosition: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
        paddingRight: '5%',
        paddingLeft: '5%',
        backgroundSize: 'cover',
        alignContent: 'center',
        ...style,
      }}
    />
  )
}
