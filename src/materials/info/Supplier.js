import React from 'react'

import { Info } from 'croods'

import renderSupplier from './supplier/render'

export default props => {
  const { supplierId } = props

  return (
    <Info
      id={supplierId}
      name="materialSupplier"
      path={`/suppliers/${supplierId}`}
      render={renderSupplier(props)}
    />
  )
}
