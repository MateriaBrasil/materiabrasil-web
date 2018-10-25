import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import Loading from './Loading'
import onClick from '../onClick'
import Colors from '../Colors'

export default ({ id, destroying }) => (destroy, { destroyed }) =>
  destroying ? (
    <Loading />
  ) : (
    <IconButton disabled={destroying} onClick={onClick(destroy)}>
      <DeleteIcon style={{ color: Colors.white }} />
    </IconButton>
  )
