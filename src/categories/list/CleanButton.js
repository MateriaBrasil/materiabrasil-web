import React from 'react'
import Button from '@material-ui/core/Button'

export default props => (
  <Button
    style={{ marginTop: 20 }}
    variant="outlined"
    onClick={props.handleClick}
  >
    Limpar filtros
  </Button>
)
