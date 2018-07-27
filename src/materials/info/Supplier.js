import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import SignUpLink from '../../auth/SignUpLink'
import CaptionWithText from './CaptionWithText'

export default props => {
  const { supplierName, manufacturingLocation, averagePrice } = props
  const { supplierContact, currentUser, location } = props
  const { pathname } = location

  return (
    <Grid item xs={12} lg={3} style={{ marginBottom: 16 }}>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
    </Grid>
  )
}
