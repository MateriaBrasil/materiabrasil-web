import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'

import renderCategory from './renderCategory'

export default props => {
  const { categories } = props

  return <FormGroup>{categories.map(renderCategory(props))}</FormGroup>
}
