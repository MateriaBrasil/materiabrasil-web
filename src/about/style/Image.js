import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  grid: {
    [theme.breakpoints.down('md')]: {
      padding: '100px 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '50px 0',
    },
    position: 'relative',
    padding: '100px 0',
    margin: '0 auto',
    overflow: 'hidden',
    textAlign: 'center',
  },
})

export default withStyles(styles)(props => (
  <Grid item xs={12} className={props.classes.grid}>
    <img
      src="https://images.template.net/wp-content/uploads/2016/03/17133511/Vector-Infographic-Report-Template-Premium-Download.jpg"
      alt=""
      style={{ maxWidth: '100%', padding: '3%' }}
    />
  </Grid>
))
