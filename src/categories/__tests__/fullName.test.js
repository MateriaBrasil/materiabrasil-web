import fullName from '../fullName'

describe('when no parentId', () => {
  it('returns name', () => {
    expect(fullName({}, {}, 'foo-name')).toBe('foo-name')
  })
})

describe('when no parentId', () => {
  it('returns name', () => {
    const categories = [{ id: 1234, name: 'foo-parent' }]
    expect(fullName(categories, { parentId: 1234 }, 'foo-name')).toBe(
      'foo-parent > foo-name',
    )
  })
})
