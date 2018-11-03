import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Colors from '../../Colors'

const styles = theme => ({
  style: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 600,
  },
})

export default withStyles(styles)(({ classes, children }) => (
  <Fragment>
    <Typography variant="h6" className={classes.style}>
      {children.title}
    </Typography>
    <Typography
      className={classes.style}
      style={{
        fontWeight: 300,
      }}
    >
      {children.desc}
    </Typography>
  </Fragment>
))
