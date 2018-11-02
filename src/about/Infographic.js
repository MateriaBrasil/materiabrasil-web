import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Session from './Session'
import gridStyle from './gridStyle'

export default withStyles(gridStyle)(props => (
  <Session id="infographic">
    <Grid item xs={12} className={props.classes.grid}>
      <img
        src="https://images.template.net/wp-content/uploads/2016/03/17133511/Vector-Infographic-Report-Template-Premium-Download.jpg"
        alt=""
        style={{ maxWidth: '100%', padding: '3%' }}
      />
    </Grid>
  </Session>
))
