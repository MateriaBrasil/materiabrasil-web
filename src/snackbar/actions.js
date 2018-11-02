export const setMessage = message => ({
  type: '@snackbar/SET_MESSAGE',
  message,
})

export const clearMessage = () => ({ type: '@snackbar/CLEAR_MESSAGE' })
