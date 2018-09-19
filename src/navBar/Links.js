import React, { Fragment } from 'react'

import SignOut from '../auth/signOut/SignOut'
import SignIn from './SignIn'
import Link from './Link'
import SupplierLink from './SupplierLink'

export default props => {
  const { currentUser } = props
  const { firstName, lastName, suppliers } = currentUser || {}
  const name = `${firstName} ${lastName}`

  return (
    <div className="navbar-links">
      <Link to="/forum" text="Fórum" />
      {currentUser ? (
        <Fragment>
          <SupplierLink suppliers={suppliers} />
          <Link to="/profile" text={name} />
          <SignOut {...props} />
        </Fragment>
      ) : (
        <Fragment>
          <Link
            to={{
              pathname: '/auth/sign-up',
              state: { referrer: '/suppliers/new' },
            }}
            text="Cadastrar fornecedor"
          />
          <SignIn {...props} />
        </Fragment>
      )}
    </div>
  )
}
