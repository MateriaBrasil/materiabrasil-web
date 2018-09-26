export const reset = () => ({ type: '@comparisons/RESET' })

export const add = item => ({
  type: '@comparisons/ADD',
  item,
})

export const remove = item => ({
  type: '@comparisons/REMOVE',
  item,
})
