import React from 'react'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import Dialog from 'materials/Dialog'
import renderAlbums from './renderAlbums'

export default props => routeProps => {
  const { id } = routeProps.match.params

  return (
    <Dialog {...props} {...routeProps} title="Adicionar a um álbum">
      <List style={{ width: '100%' }}>
        {map(
          props.currentUser && props.currentUser.albums,
          renderAlbums(props),
        )}
      </List>
    </Dialog>
  )
}
