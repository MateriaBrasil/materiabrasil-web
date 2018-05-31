import parseError from '../parseError'

describe('with a string', () => {
  it('returns the string', () => {
    expect(parseError('fooBar')).toBe('fooBar')
  })
})

describe('with network error', () => {
  it('returns the correct error', () => {
    const error = new TypeError('NetworkError Foo bar')
    expect(parseError(error)).toEqual({
      id: 'NetworkError',
      message:
        'Não foi possível se contectar ao servidor. Tente novamente em alguns minutos.',
    })
  })
})

describe('with an unrecognized error object', () => {
  it('returns an object with id and message', () => {
    const error = new TypeError('Foo bar')
    expect(parseError(error)).toEqual({ id: 'TypeError', message: 'Foo bar' })
  })
})
