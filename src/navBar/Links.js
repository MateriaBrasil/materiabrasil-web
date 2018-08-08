import React from 'react'

import SignOut from '../auth/signOut/SignOut'
import Link from './Link'

export default props => {
  const { currentUser } = props
  const { firstName, lastName, suppliers } = currentUser
  const name = `${firstName} ${lastName}`

  return (
    <div>
      {suppliers && suppliers.length > 0 ? (
        <Link to={`/suppliers/${suppliers[0].id}`} text={suppliers[0].name} />
      ) : (
        <Link to={`/suppliers/new`} text="Cadastrar fornecedor" />
      )}
      <Link to={`/profile`} text={name} />
      <SignOut {...props} />
    </div>
  )
}
