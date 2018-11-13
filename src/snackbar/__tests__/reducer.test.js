import reducer from '../reducer'

describe('without action type', () => {
  const state = { foo: 'bar' }

  it('returns as expected', () => {
    expect(reducer(state, null)).toMatchObject(state)
  })
})

describe('with @snackbar/SET_MESSAGE action type', () => {
  const state = { foo: 'bar' }
  const action = { type: '@snackbar/SET_MESSAGE' }

  it('returns as expected', () => {
    expect(reducer(state, action)).toMatchObject({
      ...state,
      message: action.describe,
    })
  })
})

describe('with @snackbar/CLEAR_MESSAGE action type', () => {
  const state = { foo: 'bar' }
  const action = { type: '@snackbar/CLEAR_MESSAGE' }

  it('returns as expected', () => {
    expect(reducer(state, action)).toMatchObject({
      ...state,
      message: null,
    })
  })
})
