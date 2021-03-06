import React from 'react'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'
import Dialog from 'materials/Dialog'
import renderAlbum from './renderAlbum'

export default props => routeProps => {
  return (
    <Dialog
      {...props}
      {...routeProps}
      onCloseModel={() => {
        routeProps.history.push(`/materials/${routeProps.match.params.id}`)
      }}
      title="Adicionar á um álbum"
    >
      {props.currentUser && (
        <Link
          to={`/materials/${routeProps.match.params.id}/albums/new`}
          style={{
            textDecoration: 'none',
            padding: 12,
            verticalAlign: 'bottom',
            display: 'inline-block',
          }}
        >
          <Button>Criar novo álbum</Button>
        </Link>
      )}
      <List style={{ width: '100%' }}>
        {map(
          props.currentUser && props.currentUser.albums,
          renderAlbum({ ...props, ...routeProps }),
        )}
      </List>
      {!props.currentUser && (
        <Typography color="inherit">
          Você não está logado, se logue para continuar
        </Typography>
      )}
    </Dialog>
  )
}
