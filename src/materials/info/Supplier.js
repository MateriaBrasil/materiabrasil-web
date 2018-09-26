import React, { Fragment } from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import SignUpLink from '../../auth/SignUpLink'

export default props => {
  const { supplierId, supplierName } = props
  const { currentUser, location } = props
  const { pathname } = location

  return (
    <div style={{ marginBottom: 22 }}>
      <Typography variant="title" color="textSecondary" gutterBottom>
        Fornecedor
      </Typography>
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
    </div>
  )
}
