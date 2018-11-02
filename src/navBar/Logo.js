import React from 'react'
import Link from 'react-router-dom/Link'
import { withStyles } from '@material-ui/core/styles'

import Colors from '../Colors'
import './Logo.css'

const styles = theme => ({
  logo: {
    display: 'inline-block',
    marginRight: 10,
    verticalAlign: 'middle',
    width: '280px',
    [theme.breakpoints.down('md')]: {
      width: '200px',
    },
  },
})

export default withStyles(styles)(props => {
  return (
    <div className="logo" style={{ flex: 1 }}>
      <Link to="/" style={{ textDecoration: 'none', color: Colors.black }}>
        <img
          className={props.classes.logo + ' image'}
          src="/images/logo.png"
          alt="logo"
        />
      </Link>
    </div>
  )
})
