import findCategory from './findCategory'

const rootCategory = (categories, category) => {
  if (!category.parentId) {
    return category
  }

  const parent = findCategory(categories, category.parentId)
  return rootCategory(categories, parent)
}

export default rootCategory
