import api from '../api'

const state = { foo: 'bar' }

describe('without action', () => {
  it('returns the state', () => {
    expect(api(state)).toEqual(state)
  })
})
