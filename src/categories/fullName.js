import findCategory from './findCategory'

const fullName = (categories, category, name) => {
  if (!category.parentId) {
    return name
  }

  const parent = findCategory(categories, category.parentId)
  return fullName(categories, parent, `${parent.name} > ${name}`)
}

export default fullName
