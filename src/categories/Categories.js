import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'

import Dialog from 'materials/Dialog'

import renderCategory from './renderCategory'

export default ({ categories, ...props }) => (
  <Dialog {...props} title="Adicionar Categorias">
    <FormGroup row>{categories.map(renderCategory(props))}</FormGroup>
  </Dialog>
)
