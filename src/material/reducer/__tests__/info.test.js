import info from '../info'

const state = { foo: 'bar' }

describe('without action', () => {
  it('returns the state', () => {
    expect(info(state)).toEqual(state)
  })
})
