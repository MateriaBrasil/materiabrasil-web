import list from '../list'

const state = { foo: 'bar' }

describe('without action', () => {
  it('returns the state', () => {
    expect(list(state)).toEqual(state)
  })
})
