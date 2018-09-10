import React from 'react'
import isEmpty from 'lodash/isEmpty'
import negate from 'lodash/negate'
import find from 'lodash/find'

import Create from './Create'
import Checkbox from './Checkbox'
import Destroy from './Destroy'
import CategoryChildren from './CategoryChildren'

export const isPresent = negate(isEmpty)

export default (props, onSelect) => category => {
  const { materialCategories, parent } = props

  const materialCategory = find(
    materialCategories,
    ({ categoryId }) => categoryId === category.id,
  )

  const childProps = {
    ...props,
    key: category.id,
    parent,
    category,
    materialCategory,
  }

  const Component = materialCategory ? Destroy : Create

  return isPresent(category.children) ? (
    <CategoryChildren {...props} onSelect={onSelect} category={category} />
  ) : onSelect ? (
    <Checkbox {...childProps} action={onSelect(category)} />
  ) : (
    <Component {...childProps} />
  )
}
