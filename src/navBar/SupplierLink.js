import React from 'react'

import Link from './Link'

export default props => {
  const { suppliers } = props
  return suppliers && suppliers.length > 0 ? (
    <Link
      to={`/suppliers/${suppliers[0].id}/materials/new`}
      text='Cadastrar Material'
      {...props}
    />
  ) : (
    <Link to={`/suppliers/new`} text="Cadastrar fornecedor" {...props} />
  )
}
