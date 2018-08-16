import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import IconButton from '@material-ui/core/IconButton'

import Loading from '../Loading'

export default ({ onClick, creating, style }) =>
  creating ? (
    <Loading
      style={{
        display: 'inline',
        padding: 14,
        position: 'relative',
        bottom: -6,
      }}
      color="inherit"
      size={20}
    />
  ) : (
    <IconButton onClick={onClick} style={style}>
      <BookmarkIcon />
    </IconButton>
  )
