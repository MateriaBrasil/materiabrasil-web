import React, { Component, Fragment } from 'react'
import Media from 'react-media'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import Menu from './Menu'
import Links from './Links'
import Colors from '../Colors'

export default class extends Component {
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
      <Media query="(max-width:960px)">
        {matches =>
          matches ? (
            <Fragment>
              <IconButton onClick={this.handleClick}>
                <MenuIcon
                  style={{
                    ...(this.props.isInstitutionalPage && {
                      color: Colors.white,
                    }),
                  }}
                />
              </IconButton>
              <Menu
                {...this.props}
                open={open}
                anchorEl={anchorEl}
                handleClose={this.handleClose}
              />
            </Fragment>
          ) : (
            <Links {...this.props} />
          )
        }
      </Media>
    )
  }
}
