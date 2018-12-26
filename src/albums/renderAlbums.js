import React from 'react'
import ListItem from '@material-ui/core/ListItem'

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
      {album.name}
    </ListItem>
  )
}
