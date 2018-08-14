import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'

export default ({
  name,
  editable = false,
  imageUrl = '/images/avatar.png',
}) => (
  <CardMedia
    style={{
      width: 400,
      height: 400,
      display: 'inline-block',
      marginRight: 16,
      borderRadius: 2,
    }}
    image={imageUrl}
    title={editable ? 'Clique para editar' : name}
  />
)
