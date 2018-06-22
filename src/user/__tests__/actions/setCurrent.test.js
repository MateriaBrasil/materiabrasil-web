import { setCurrent } from '../../actions'

describe('with parameters', () => {
  it('returns the correct type and data', () => {
    expect(setCurrent({ foo: 'bar' })).toEqual({
      type: '@user/SET_CURRENT',
      user: { foo: 'bar' },
    })
  })
})
