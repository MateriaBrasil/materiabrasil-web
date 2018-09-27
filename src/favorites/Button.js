import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Loading from './Loading'

export default ({ onClick, creating, style }) =>
  creating ? (
    <Loading />
  ) : (
    <Tooltip title="Adicionar aos favoritos">
      <IconButton onClick={onClick} style={style}>
        <BookmarkIcon />
      </IconButton>
    </Tooltip>
  )
