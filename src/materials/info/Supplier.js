import React, { Fragment } from 'react'
import Link from 'react-router-dom/Link'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import SignUpLink from '../../auth/SignUpLink'
import CaptionWithText from './CaptionWithText'

export default props => {
  const { supplierId, supplierName } = props
  const { currentUser, location } = props
  const { pathname } = location

  return (
    <Grid item xs={12} lg={3} style={{ marginBottom: 16 }}>
      <Card>
        <CardContent>
          <CaptionWithText caption="Fornecedor" />
          {currentUser ? (
            <Fragment>
              <Typography variant="subheading" style={{ marginBottom: 10 }}>
                {supplierName}
              </Typography>
              <Link
                to={`/suppliers/${supplierId}`}
                style={{ textDecoration: 'none' }}
              >
                <Button variant="raised" color="primary">
                  Ver perfil
                </Button>
              </Link>
            </Fragment>
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
