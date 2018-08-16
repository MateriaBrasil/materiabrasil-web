import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import SignUpLink from '../../auth/SignUpLink'
import CaptionWithText from './CaptionWithText'
import TextLink from '../../TextLink'

export default props => {
  const { supplierId } = props
  const { currentUser, location } = props
  const { pathname } = location

  return (
    <Grid item xs={12} lg={3} style={{ marginBottom: 16 }}>
      <Card>
        <CardContent>
          <CaptionWithText caption="Fornecedor" />
          {currentUser ? (
            <TextLink
              text="Contato do fornecedor"
              to={`/suppliers/${supplierId}`}
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
