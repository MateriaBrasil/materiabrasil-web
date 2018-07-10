import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import onClick from '../onClick'

export default ({ id, destroying }) => (destroy, { destroyed }) => (
  <IconButton disabled={destroying} onClick={onClick(destroy)}>
    <DeleteIcon />
  </IconButton>
)
