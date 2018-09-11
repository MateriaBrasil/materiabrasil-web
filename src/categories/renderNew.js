import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'

import renderCategory from './renderCategory'

export default parentProps => ({ create, creating }) => {
  const props = { ...parentProps, create, creating }
  const { categories } = props

  return (
    <FormGroup>
      {categories.map(category =>
        renderCategory({ ...props, rootCategory: category })(category),
      )}
    </FormGroup>
  )
}
