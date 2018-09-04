import ncmNormalizer from '../ncmNormalizer'

describe('with nothing', () => {
  it('returns correctly', () => {
    expect(ncmNormalizer('')).toBe('')
  })
})

describe('with 1', () => {
  it('returns correctly', () => {
    expect(ncmNormalizer('1')).toBe('1')
  })
})

describe('with 111111', () => {
  it('returns correctly', () => {
    expect(ncmNormalizer('11111')).toBe('11.11.1')
  })
})

describe('with 111111111', () => {
  it('returns correctly', () => {
    expect(ncmNormalizer('111111111')).toBe('11.11.11.11')
  })
})
