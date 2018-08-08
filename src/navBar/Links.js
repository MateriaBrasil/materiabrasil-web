import React from 'react'

import SignOut from '../auth/signOut/SignOut'
import Link from './Link'

export default props => {
  const { currentUser } = props
  const { firstName, lastName, suppliers } = currentUser
  const name = `${firstName} ${lastName}`
  const supplier = suppliers[0]

  return (
    <div>
      {supplier ? (
        <Link to={`/suppliers/${supplier.id}`} text={supplier.name} />
      ) : (
        <Link to={`/suppliers/new`} text="Cadastrar fornecedor" />
      )}
      <Link to={`/profile`} text={name} />
      <SignOut {...props} />
    </div>
  )
}
