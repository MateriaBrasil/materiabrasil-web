import React, { Component } from 'react'
import { withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import LinksOrMenu from './LinksOrMenu'
import Logo from './Logo'

class NavBar extends Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    return (
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <Logo />
          <LinksOrMenu
            {...this.props}
            handleClick={this.handleClick}
            handleClose={this.handleClose}
            anchorEl={anchorEl}
          />
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(NavBar)
