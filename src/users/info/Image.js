import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'

export default ({ name, editable = false }) => (
  <CardMedia
    style={{
      width: 300,
      height: 300,
      display: 'inline-block',
      marginRight: 16,
      borderRadius: 2,
    }}
    image="/images/avatar.png"
    title={editable ? 'Clique para editar' : name}
  />
)
