import React from 'react'
import isEmpty from 'lodash/isEmpty'
import negate from 'lodash/negate'
import find from 'lodash/find'
import map from 'lodash/map'
import includes from 'lodash/includes'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import Create from './Create'
import Checkbox from './Checkbox'
import Destroy from './Destroy'
import CategoryChildren from './CategoryChildren'

export const isPresent = negate(isEmpty)

const renderCategory = props => category => {
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
    category.parentId ? (
      <CategoryChildren key={category.id} {...props} category={category} />
    ) : (
      <div key={category.id} style={{ marginBottom: 20 }}>
        <Typography variant="headline" style={{ marginBottom: 20 }}>
          {category.name}
        </Typography>
        <Paper>
          {category.children.map(
            renderCategory({ ...props, parent: category }),
          )}
        </Paper>
      </div>
    )
  ) : filters.selectedCategories ? (
    <Checkbox {...childProps} action={action} checked={checked} />
  ) : (
    <Component {...childProps} />
  )
}

export default renderCategory
