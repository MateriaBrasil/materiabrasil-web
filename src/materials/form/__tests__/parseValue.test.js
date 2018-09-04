import parseValue from '../parseValue'

describe('with value', () => {
  it('converts value to integer', () => {
    expect(parseValue('100')).toBe(100)
  })
})

describe('without value', () => {
  it('returns null', () => {
    expect(parseValue()).toBe(null)
  })
})
