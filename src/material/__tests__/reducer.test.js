import reducer from '../reducer'

import initialState from '../reducer/initialState'

describe('with default values', () => {
  it('returns the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})

describe('with another prefix', () => {
  it('returns the initial state', () => {
    const action = { type: '@foo/SET_DESTINATION_AND_DATE' }
    expect(reducer(undefined, action)).toEqual(initialState)
  })
})

describe('with unknown action', () => {
  it('returns the initial state', () => {
    const action = { type: '@material/FOO_BAR' }
    expect(reducer(undefined, action)).toEqual(initialState)
  })
})

describe('with "startUp" action', () => {
  it('returns the correct state', () => {
    const action = { type: '@material/START_UP' }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      startingUp: false,
    })
  })
})

describe('with "list request" action', () => {
  it('returns the correct state', () => {
    const action = { type: '@material/INFO_REQUEST' }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      infoError: null,
      requestingInfo: true,
    })
  })
})

describe('with "list failure" action', () => {
  it('returns the correct state', () => {
    const action = {
      type: '@material/INFO_FAILURE',
      error: { message: 'foo' },
    }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      requestingInfo: false,
      infoError: action.error.message,
    })
  })
})

describe('with "list success" action', () => {
  it('returns the correct state', () => {
    const action = {
      type: '@material/INFO_SUCCESS',
      current: 'foo',
    }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      requestingInfo: false,
      current: action.current,
    })
  })
})
