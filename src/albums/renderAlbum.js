import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import NewFavorite from '../favorites/New'

export default props => album => {
  return (
    <ListItem
      key={album.name}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <NewFavorite
        albumId={album.id}
        albumName={album.name}
        materialId={parseInt(props.match.params.id, 10)}
        {...props}
      />
    </ListItem>
  )
}
