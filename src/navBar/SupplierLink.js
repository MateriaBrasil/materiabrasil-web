import React from 'react'

import Link from './Link'

export default props => {
  const { suppliers } = props
  return suppliers && suppliers.length > 0 ? (
    <Link to={`/suppliers/${suppliers[0].id}`} text={suppliers[0].name} />
  ) : (
    <Link to={`/suppliers/new`} text="Cadastrar fornecedor" />
  )
}
