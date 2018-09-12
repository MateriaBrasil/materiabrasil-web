import findCategory from '../findCategory'

describe('when children matches', () => {
  it('returns children', () => {
    const categories = [
      { id: 4321, name: 'foo-name', children: [{ id: 1234 }] },
    ]
    expect(findCategory(categories, 1234)).toBe(categories[0].children[0])
  })
})

// category always have children, even when empty?
// isEmpty([undefined] is false)
describe('when is empty', () => {
  it('returns null', () => {
    const categories = [{ id: 4321, name: 'foo-name', children: [] }]
    expect(findCategory(categories, 1234)).toBe(null)
  })
})
