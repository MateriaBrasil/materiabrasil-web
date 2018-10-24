import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
 
import Style from './Style'

export default withStyles(Style)(props => (
  <Grid item xs={12} className={props.classes.grid}>
    <img
      src="https://images.template.net/wp-content/uploads/2016/03/17133511/Vector-Infographic-Report-Template-Premium-Download.jpg"
      alt=""
      style={{ maxWidth: '100%', padding: '3%' }}
    />
  </Grid>
))
