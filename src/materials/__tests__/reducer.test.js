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
    const action = { type: '@materials/FOO_BAR' }
    expect(reducer(undefined, action)).toEqual(initialState)
  })
})

describe('with "startUp" action', () => {
  it('returns the correct state', () => {
    const action = { type: '@materials/START_UP' }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      startingUp: false,
    })
  })
})

describe('with "list request" action', () => {
  it('returns the correct state', () => {
    const action = { type: '@materials/LIST_REQUEST' }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      listError: null,
      listing: true,
    })
  })
})

describe('with "list failure" action', () => {
  it('returns the correct state', () => {
    const action = {
      type: '@materials/LIST_FAILURE',
      error: { message: 'foo' },
    }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      listing: false,
      listError: action.error.message,
    })
  })
})

describe('with "list success" action', () => {
  it('returns the correct state', () => {
    const action = {
      type: '@materials/LIST_SUCCESS',
      list: 'foo',
    }

    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      listing: false,
      list: action.list,
    })
  })
})
