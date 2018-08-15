import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'

export default ({ name, imageUrl, editPath }) => (
  <CardMedia
    style={{
      width: 400,
      height: 400,
      display: 'inline-block',
      marginRight: 16,
      borderRadius: 2,
      backgroundColor: '#ddd',
    }}
    image={imageUrl === '' || !imageUrl ? '/images/avatar.png' : imageUrl}
    title={editPath ? 'Clique para editar' : name}
  />
)
