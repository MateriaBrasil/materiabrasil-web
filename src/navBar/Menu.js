import React, { Fragment } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import SignOut from '../auth/signOut/SignOut'

import Link from './Link'
import SignIn from './SignIn'
import SupplierLink from './SupplierLink'
import './Link.css'

export default props => {
  const { anchorEl, open, handleClose } = props
  const { currentUser } = props
  const { firstName, lastName, suppliers } = currentUser || {}
  const name = `${firstName} ${lastName}`

  return (
    <Menu
      id="menu-appbar"
      className="menu-appbar"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem>
        <Link to="/forum" text="Fórum" />
      </MenuItem>
      {currentUser ? (
        <Fragment>
          <MenuItem>
            <SupplierLink suppliers={suppliers} />
          </MenuItem>
          <MenuItem>
            <Link to="/profile" text={name} />
          </MenuItem>
          <MenuItem>
            <SignOut {...props} />
          </MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem onClick={handleClose}>
            <Link
              to={{
                pathname: '/auth/sign-up',
                state: { referrer: '/suppliers/new' },
              }}
              text="Cadastrar fornecedor"
            />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <SignIn {...props} />
          </MenuItem>
        </Fragment>
      )}
    </Menu>
  )
}
