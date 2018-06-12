import React from 'react'

import CaptionWithText from './CaptionWithText'

export default props => {
  const { supplierName, manufacturingLocation, averagePrice } = props
  const { supplierContact } = props

  return (
    <div>
      <CaptionWithText caption="Fornecedor" text={supplierName} />
      <CaptionWithText
        caption="Local de produção"
        text={manufacturingLocation}
      />
      <CaptionWithText caption="Preço médio" text={averagePrice} />
      <CaptionWithText caption="Contato do fornecedor" text={supplierContact} />
    </div>
  )
}
