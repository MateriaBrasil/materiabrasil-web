import React from 'react'
import Typography from '@material-ui/core/Typography'
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
    padding: '50px 0',
    margin: '0 auto',
    overflow: 'hidden',
    textAlign: 'center',
  },
})

export default withStyles(styles)(props => (
  <Grid item xs={12} sm={8} md={6} className={props.classes.grid}>
    <Typography
      variant="display2"
      color="inherit"
      className="text"
      style={{
        color: '#fff',
        display: 'inline-block',
        verticalAlign: 'middle',
        fontWeight: 300,
      }}
    >
      {props.children}
    </Typography>
  </Grid>
))
