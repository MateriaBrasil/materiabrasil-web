import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import SignUpLink from '../../../auth/SignUpLink'
import CaptionWithText from '../CaptionWithText'

export default props => {
  const { manufacturingLocation, averagePrice, supplier } = props
  const { currentUser, location } = props
  const { name, email } = supplier || {}
  const { pathname } = location

  return (
    <Grid item xs={12} lg={3} style={{ marginBottom: 16 }}>
      <Card>
        <CardContent>
          <CaptionWithText caption="Fornecedor" text={name} />
          <CaptionWithText
            caption="Local de produção"
            text={manufacturingLocation}
          />
          <CaptionWithText caption="Preço médio" text={averagePrice} />
          {currentUser ? (
            <CaptionWithText caption="Contato do fornecedor" text={email} />
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
