import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'

export default props => {
  const { id } = props

  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={`/suppliers/${id}/questionnaires`}
    >
      <Hidden xsUp>
        <Button variant="contained" color="primary">
          Responder questionários
        </Button>
      </Hidden>
    </Link>
  )
}
