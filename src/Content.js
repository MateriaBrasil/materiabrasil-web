import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import './Content.css'
import styles from './styles'

export default withStyles(styles)(({ classes, children, institutional }) => {
  const external = `${classes.institutional} content`
  const internal = `${classes.navbarPadding} content`

  return <div className={institutional ? external : internal}>{children}</div>
})
