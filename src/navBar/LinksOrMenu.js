import React, { Fragment } from 'react'
import Media from 'react-media'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import Menu from './Menu'
import Links from './Links'

export default props => {
  const { anchorEl, handleClick, handleClose } = props
  const open = Boolean(anchorEl)
  return (
    <Media query="(max-width:960px)">
      {matches =>
        matches ? (
          <Fragment>
            <IconButton onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              {...props}
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
            />
          </Fragment>
        ) : (
          <Links {...props} />
        )
      }
    </Media>
  )
}
