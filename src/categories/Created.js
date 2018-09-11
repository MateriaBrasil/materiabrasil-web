import { Component } from 'react'
import find from 'lodash/find'
import map from 'lodash/map'
import filter from 'lodash/filter'
import isEmpty from 'lodash/isEmpty'
import flatten from 'lodash/flatten'

const findCategory = (categories, categoryId) => {
  const category = find(categories, ({ id }) => id === categoryId)

  if (category) {
    return category
  }

  const children = flatten(map(categories, category => category.children))
  return isEmpty(children) ? null : findCategory(children, categoryId)
}

const rootCategory = (categories, category) => {
  if (!category.parentId) {
    return category
  }

  const parent = findCategory(categories, category.parentId)
  return rootCategory(categories, parent)
}

export default class extends Component {
  constructor(props) {
    super(props)

    const { setMaterialCategories, materialCategories, categories } = props
    const { created } = props

    const createdCategory = findCategory(categories, created.categoryId)
    const root = rootCategory(categories, createdCategory)

    if (root.multipleChoice) {
      return
    }

    setMaterialCategories(
      filter(materialCategories, ({ categoryId }) => {
        if (categoryId === created.categoryId) {
          return true
        }

        const category = findCategory(categories, categoryId)
        return rootCategory(categories, category) !== root
      }),
    )
  }

  render() {
    return null
  }
}
