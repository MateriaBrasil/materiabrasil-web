import shCodeNormalizer from '../shCodeNormalizer'


describe('with nothing', () => {
  it('returns correctly', () => {
    expect(shCodeNormalizer('')).toBe('')
  })
})

describe('with 1', () => {
  it('returns correctly', () => {
    expect(shCodeNormalizer('1')).toBe('1')
  })
})

describe('with 111111', () => {
  it('returns correctly', () => {
    expect(shCodeNormalizer('11111')).toBe('1111.1')
  })
})

describe('with 111111111', () => {
  it('returns correctly', () => {
    expect(shCodeNormalizer('111111111')).toBe('1111.11')
  })
})
