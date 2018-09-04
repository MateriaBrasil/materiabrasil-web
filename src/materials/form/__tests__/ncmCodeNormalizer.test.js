import ncmCodeNormalizer from '../ncmCodeNormalizer'

describe('with nothing', () => {
  it('returns correctly', () => {
    expect(ncmCodeNormalizer('')).toBe('')
  })
})

describe('with 1', () => {
  it('returns correctly', () => {
    expect(ncmCodeNormalizer('1')).toBe('1')
  })
})

describe('with 111111', () => {
  it('returns correctly', () => {
    expect(ncmCodeNormalizer('11111')).toBe('11.11.1')
  })
})

describe('with 111111111', () => {
  it('returns correctly', () => {
    expect(ncmCodeNormalizer('111111111')).toBe('11.11.11.11')
  })
})
