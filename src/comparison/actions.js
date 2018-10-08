export const reset = () => ({ type: '@comparison/RESET' })

export const add = item => ({
  type: '@comparison/ADD',
  item,
})

export const remove = item => ({
  type: '@comparison/REMOVE',
  item,
})

export const open = () => ({ type: '@comparison/OPEN' })
export const close = () => ({ type: '@comparison/CLOSE' })
