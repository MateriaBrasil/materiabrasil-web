import React from 'react'
import Button from '@material-ui/core/Button'

import onClick from '../onClick'

export default ({ id }) => (destroy, { destroying, destroyed }) => (
  <Button color="secondary" disabled={destroying} onClick={onClick(destroy)}>
    Remover
  </Button>
)
