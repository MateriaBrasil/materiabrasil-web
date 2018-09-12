import React from 'react'
import isEmpty from 'lodash/isEmpty'
import negate from 'lodash/negate'
import find from 'lodash/find'
import map from 'lodash/map'
import includes from 'lodash/includes'

import Create from './Create'
import Checkbox from './Checkbox'
import Destroy from './Destroy'
import CategoryChildren from './CategoryChildren'

export const isPresent = negate(isEmpty)

export default props => category => {
  const { materialCategories, parent, filters = {} } = props

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

  const { selectCategory, unselectCategory } = filters.actions || {}

  const checked = includes(
    map(filters.selectedCategories, ({ id }) => id),
    category.id,
  )

  const filterAction = checked ? unselectCategory : selectCategory
  const action = () => filterAction(category)
  return isPresent(category.children) ? (
    <CategoryChildren key={category.id} {...props} category={category} />
  ) : filters.selectedCategories ? (
    <Checkbox {...childProps} action={action} checked={checked} />
  ) : (
    <Component {...childProps} />
  )
}
