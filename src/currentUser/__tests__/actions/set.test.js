import { set } from '../../actions'

describe('with parameters', () => {
  it('returns the correct type and data', () => {
    expect(set({ foo: 'bar' })).toEqual({
      type: '@currentUser/SET',
      user: { foo: 'bar' },
    })
  })
})
