import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
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
      <Button>{album.name}</Button>
      <NewFavorite
        albumId={album.id}
        materialId={parseInt(props.match.params.id, 10)}
        {...props}
      />
    </ListItem>
  )
}
