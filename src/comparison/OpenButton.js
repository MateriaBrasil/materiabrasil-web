import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/icons/ExpandLess'

export default props => (
  <Button variant="contained" color="primary" {...props}>
    Comparação de materiais
    <Icon style={{ marginLeft: 8 }} />
  </Button>
)
