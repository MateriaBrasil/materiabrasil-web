import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

export default ({ onClick, creating, type = 'button' }) =>
  type === 'button' ? (
    <Button
      variant="raised"
      color="secondary"
      disabled={creating}
      onClick={onClick}
    >
      <BookmarkIcon />
      Salvar
    </Button>
  ) : (
    <IconButton onClick={onClick}>
      <BookmarkIcon />
    </IconButton>
  )
