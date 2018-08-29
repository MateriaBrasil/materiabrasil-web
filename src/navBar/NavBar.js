import React, { Component } from 'react'
import { withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Media from 'react-media'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import Links from './Links'
import Logo from './Logo'
import Menu from './Menu'

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
    const open = Boolean(anchorEl)
    return (
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <Logo />
          <Media query="(max-width:960px)">
            {matches =>
              matches ? (
                <IconButton onClick={this.handleClick}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <Links className="navbar-links"{...this.props} />
              )
            }
          </Media>
          <Menu
            {...this.props}
            open={open}
            anchorEl={anchorEl}
            handleClose={this.handleClose}
          />
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(NavBar)
