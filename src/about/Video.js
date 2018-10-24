import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Video from '../Video'
import gridStyle from './gridStyle'

export default withStyles(gridStyle)(props => (
  <Grid
    item
    xs={12}
    sm={8}
    md={6}
    className={props.classes.grid}
    style={{
      paddingTop: '35%',
      position: 'relative',
    }}
  >
    <Video />
  </Grid>
))
