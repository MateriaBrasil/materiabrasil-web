import reducer from '../reducer'

describe('with UPDATE_MATERIAL_CATEGORY', () => {
  it('returns the correct state', () => {
    const state = {}
    const action = {
      type: '@categoryFilled/UPDATE_MATERIAL_CATEGORY',
      materialId: 21,
    }
    expect(reducer(state, action)).toEqual({
      '21': true,
    })
  })
})
