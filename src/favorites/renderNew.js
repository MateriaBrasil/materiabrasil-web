import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Button from '@material-ui/core/Button'

import createWithParams from './createWithParams'

export default id => ({ create, creating, error }) => (
  <Button
    variant="raised"
    color="secondary"
    disabled={creating}
    onClick={createWithParams(create, id)}
  >
    <BookmarkIcon />
    Salvar
  </Button>
)
