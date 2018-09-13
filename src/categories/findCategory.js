import find from 'lodash/find'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import flatten from 'lodash/flatten'

const findCategory = (categories, categoryId) => {
  const category = find(categories, ({ id }) => id === categoryId)

  if (category) {
    return category
  }

  const children = flatten(map(categories, 'children'))
  return isEmpty(children) ? null : findCategory(children, categoryId)
}

export default findCategory
