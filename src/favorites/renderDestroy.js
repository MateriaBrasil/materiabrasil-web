import React from 'react'
import Button from '@material-ui/core/Button'

import onClick from '../onClick'

export default ({ id }) => (destroy, { destroyed }) => (
  <Button color="secondary" onClick={onClick(destroy)}>
    Remover
  </Button>
)
