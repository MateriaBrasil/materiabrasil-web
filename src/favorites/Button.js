import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import IconButton from '@material-ui/core/IconButton'

export default ({ onClick, creating, style }) => (
  <IconButton onClick={onClick} style={style}>
    <BookmarkIcon />
  </IconButton>
)
