import React, { Fragment } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import SignOut from '../auth/signOut/SignOut'

import Link from './Link'
import SignIn from './SignIn'
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
      {currentUser ? (
        <Fragment>
          <MenuItem>
            {suppliers && suppliers.length > 0 ? (
              <Link
                to={`/suppliers/${suppliers[0].id}`}
                text={suppliers[0].name}
              />
            ) : (
              <Link to={`/suppliers/new`} text="Cadastrar fornecedor" />
            )}
          </MenuItem>
          <MenuItem>
            <Link to={`/profile`} text={name} />
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
