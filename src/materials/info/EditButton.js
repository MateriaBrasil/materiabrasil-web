import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

export default props => {
  const { id, path = 'edit', label } = props

  return (
    <Link
      to={`/${id}/${path}`}
      style={{ textDecoration: 'none', marginRight: 24 }}
    >
      <Button variant="raised" color="primary" style={{ marginBottom: 24 }}>
        {label}
      </Button>
    </Link>
  )
}