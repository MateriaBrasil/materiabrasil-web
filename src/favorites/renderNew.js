import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Button from '@material-ui/core/Button'

import createWithParams from './createWithParams'

export default id => ({ create, error }) => (
  <Button
    variant="raised"
    color="secondary"
    onClick={createWithParams(create, id)}
  >
    <BookmarkIcon />
    Salvar
  </Button>
)
