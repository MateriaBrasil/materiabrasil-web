import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'

import CaptionWithText from './CaptionWithText'

export default props => {
  const { supplierName, manufacturingLocation, averagePrice } = props
  const { supplierContact, currentUser } = props

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
        <Typography variant="body1" color="inherit">
          <Link to="/auth/sign-up" style={{ textDecoration: 'none' }}>
            Cadastre-se
          </Link>{' '}
          <span>para ver o contato do fornecedor.</span>
        </Typography>
      )}
    </div>
  )
}
