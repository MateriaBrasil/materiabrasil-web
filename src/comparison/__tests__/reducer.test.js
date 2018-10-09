import reducer from '../reducer'

describe('without action type', () => {
  const state = { foo: 'bar' }

  it('returns as expected', () => {
    expect(reducer(state, null)).toMatchObject(state)
  })
})

describe('with @comparison/RESET action type', () => {
  const state = { foo: 'bar' }
  const action = { type: '@comparison/RESET' }
  const initialState = {
    list: [],
    open: false,
  }

  it('returns as expected', () => {
    expect(reducer(state, action)).toMatchObject(initialState)
  })
})

describe('with @comparison/ADD action type', () => {
  const item = { id: 1 }
  const state = { foo: 'bar', list: [item, { id: 2 }] }
  const action = { type: '@comparison/ADD', item }

  it('returns as expected', () => {
    expect(reducer(state, action)).toMatchObject({
      ...state,
      list: [{ id: 2 }, item],
      open: true,
    })
  })
})

describe('with @comparison/REMOVE action type', () => {
  const item = { id: 1 }
  const state = { foo: 'bar', list: [item, { id: 2 }] }
  const action = { type: '@comparison/REMOVE', item }

  it('returns as expected', () => {
    expect(reducer(state, action)).toMatchObject({
      ...state,
      list: [{ id: 2 }],
    })
  })
})

describe('with @comparison/OPEN action type', () => {
  const state = { foo: 'bar' }
  const action = { type: '@comparison/OPEN' }

  it('returns as expected', () => {
    expect(reducer(state, action)).toMatchObject({
      ...state,
      open: true,
    })
  })
})

describe('with @comparison/CLOSE action type', () => {
  const state = { foo: 'bar' }
  const action = { type: '@comparison/CLOSE' }

  it('returns as expected', () => {
    expect(reducer(state, action)).toMatchObject({
      ...state,
      open: false,
    })
  })
})
