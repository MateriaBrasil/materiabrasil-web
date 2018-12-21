import { setCategory } from '../actions'

describe('setCategory', () => {
  it('calls correctly', () => {
    expect(setCategory(12)).toEqual({
      type: '@categoryFilled/UPDATE_MATERIAL_CATEGORY',
      materialId: 12,
    })
  })
})
