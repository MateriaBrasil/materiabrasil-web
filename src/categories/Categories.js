import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'

import Dialog from 'materials/Dialog'

import categories from './mock'
import renderCategory from './renderCategory'

export default props => (
  <Dialog {...props} title="Adicionar Categorias">
    <FormGroup row>{categories.map(renderCategory)}</FormGroup>
  </Dialog>
)
