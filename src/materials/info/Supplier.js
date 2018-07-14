import React from 'react'

import SignUpLink from '../../auth/SignUpLink'
import CaptionWithText from './CaptionWithText'

export default props => {
  const { supplierName, manufacturingLocation, averagePrice } = props
  const { supplierContact, currentUser, location } = props
  const { pathname } = location

  return (
    <div>
      <CaptionWithText caption="Fornecedor" text={supplierName} />
      <CaptionWithText
        caption="Local de produção"
        text={manufacturingLocation}
      />
      <CaptionWithText caption="Preço médio" text={averagePrice} />
      {currentUser ? (
        <CaptionWithText
          caption="Contato do fornecedor"
          text={supplierContact}
        />
      ) : (
        <SignUpLink
          pathname={pathname}
          text="para ver o contato do fornecedor."
        />
      )}
    </div>
  )
}
