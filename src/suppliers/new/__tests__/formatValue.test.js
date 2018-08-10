import formatValue from '../formatValue'

describe('with value', () => {
  it('converts value to string', () => {
    expect(formatValue(100)).toBe('100')
  })
})

describe('without value', () => {
  it('returns null', () => {
    expect(formatValue()).toBe(null)
  })
})
