import React from 'react'
import { Destroy } from 'croods'

import Checkbox from './Checkbox'

export default props => {
  const { category, materialCategory } = props

  return (
    <Destroy
      key={category.id}
      id={materialCategory.id}
      path={`/material_categories/${materialCategory.id}`}
      name="materialCategories"
      render={destroy => <Checkbox {...props} action={destroy} />}
    />
  )
}
