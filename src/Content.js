import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import './Content.css'

const styles = theme => ({
  navbarPadding: {
    paddingTop: '124px',
    [theme.breakpoints.down('md')]: {
      paddingTop: '80px',
    },
  },
})

export default withStyles(styles)(props => {
  return (
    <div className={(props.classes.navbarPadding + ' content')}>
      {props.children}
    </div>
  )
})
