import { setMessage, clearMessage } from '../actions'

describe('setMessage', () => {
  it('returns as expected', () => {
    const message = { foobar: 'foo' }
    expect(setMessage(message)).toMatchObject({
      type: '@snackbar/SET_MESSAGE',
      message,
    })
  })
})

describe('clearMessage', () => {
  it('returns as expected', () => {
    expect(clearMessage()).toMatchObject({ type: '@snackbar/CLEAR_MESSAGE' })
  })
})
