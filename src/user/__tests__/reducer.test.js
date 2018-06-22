import reducer from '../reducer'
import initialState from '../reducer/initialState'

describe('with default values', () => {
  it('returns the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})

describe('with another prefix', () => {
  it('returns the initial state', () => {
    const action = { type: '@foo/SET_CURRENT' }
    expect(reducer(undefined, action)).toEqual(initialState)
  })
})

describe('with unknown action', () => {
  it('returns the initial state', () => {
    const action = { type: '@user/FOO_BAR' }
    expect(reducer(undefined, action)).toEqual(initialState)
  })
})

describe('with "set current" action', () => {
  it('returns the correct state', () => {
    const user = { id: 1, name: 'foo bar', email: 'foo@bar.com' }

    const action = {
      type: '@user/SET_CURRENT',
      user,
    }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      current: user,
    })
  })
})
