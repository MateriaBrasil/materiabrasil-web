export const reset = () => ({ type: '@filters/RESET' })

export const selectCategory = category => ({
  type: '@filters/SELECT_CATEGORY',
  category,
})

export const unselectCategory = category => ({
  type: '@filters/UNSELECT_CATEGORY',
  category,
})
