import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'

import renderCategory from './renderCategory'

export default ({ categories, ...props }) => (
  <FormGroup>{categories.map(renderCategory(props))}</FormGroup>
)
