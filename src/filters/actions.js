export const setCategories = categories => ({
  type: '@filters/SET_CATEGORIES',
  categories,
})

export const selectCategory = category => ({
  type: '@filters/SELECT_CATEGORY',
  category,
})

export const unselectCategory = category => ({
  type: '@filters/UNSELECT_CATEGORY',
  category,
})
