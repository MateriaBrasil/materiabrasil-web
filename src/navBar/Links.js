import React from 'react'

import SignOut from '../auth/signOut/SignOut'
import Link from './Link'

export default props => {
  const { currentUser } = props
  const { firstName, lastName } = currentUser
  const name = `${firstName} ${lastName}`

  return (
    <div>
      <Link to={`/suppliers/new`} text="Cadastrar fornecedor" />
      <Link to={`/profile`} text={name} />
      <SignOut {...props} />
    </div>
  )
}
