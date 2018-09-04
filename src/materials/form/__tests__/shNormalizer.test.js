import shNormalizer from '../shNormalizer'

describe('with nothing', () => {
  it('returns correctly', () => {
    expect(shNormalizer('')).toBe('')
  })
})

describe('with 1', () => {
  it('returns correctly', () => {
    expect(shNormalizer('1')).toBe('1')
  })
})

describe('with 111111', () => {
  it('returns correctly', () => {
    expect(shNormalizer('11111')).toBe('1111.1')
  })
})

describe('with 111111111', () => {
  it('returns correctly', () => {
    expect(shNormalizer('111111111')).toBe('1111.11')
  })
})
