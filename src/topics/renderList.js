import React from 'react'
import { List } from 'croods'
import Button from '@material-ui/core/Button'
import Link from 'react-router-dom/Link'

import render from './list/render'

export default props => routeProps => {
  const { currentUser } = props

  return (
    <div style={{ textAlign: 'right' }}>
      {currentUser && (
        <Link to="/forum/new" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: 24 }}
          >
            Iniciar conversa
          </Button>
        </Link>
      )}
      <List name="topics" render={render(props)} />
    </div>
  )
}
