import React from 'react'

import Children from '../Children'
import SignOut from '../auth/signOut/SignOut'
import SignIn from './SignIn'
import Link from './Link'

export default props => {
  const { currentUser } = props
  const { firstName, lastName, suppliers } = currentUser || {}
  const name = `${firstName} ${lastName}`

  return (
    <div>
      {currentUser ? (
        <Children>
          {suppliers && suppliers.length > 0 ? (
            <Link
              to={`/suppliers/${suppliers[0].id}`}
              text={suppliers[0].name}
            />
          ) : (
            <Link to={`/suppliers/new`} text="Cadastrar fornecedor" />
          )}
          <Link to={`/profile`} text={name} />
          <SignOut {...props} />
        </Children>
      ) : (
        <Children>
          <Link
            to={{
              pathname: '/auth/sign-up',
              state: { referrer: '/suppliers/new' },
            }}
            text="Cadastrar fornecedor"
          />
          <SignIn {...props} />
        </Children>
      )}
    </div>
  )
}
