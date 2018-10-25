import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import gridStyle from './gridStyle'
import DriversButton from './DriversButton'

export default withStyles(gridStyle)(props => (
  <Grid item xs={12} className={props.classes.grid}>
    <DriversButton color="default" text="Clickable 1" />
    <DriversButton color="primary" text="Clickable 2" />
    <DriversButton color="secondary" text="Clickable 3" />
    <DriversButton color="default" text="Clickable 4" />
  </Grid>
))
