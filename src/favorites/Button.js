import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import IconButton from '@material-ui/core/IconButton'

import Loading from './Loading'

export default ({ onClick, creating, style }) =>
  creating ? (
    <Loading />
  ) : (
    <IconButton onClick={onClick} style={style}>
      <BookmarkIcon />
    </IconButton>
  )
