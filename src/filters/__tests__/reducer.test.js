import reducer from '../reducer'

describe('without action', () => {
  it('returns the correct state', () => {
    const state = { selectedCategories: [{ id: 1234 }] }
    expect(reducer(state)).toEqual({
      selectedCategories: [{ id: 1234 }],
    })
  })
})

describe('with RESET', () => {
  it('returns the correct state', () => {
    const state = { selectedCategories: [{ id: 1234 }] }
    const action = { type: '@filters/RESET' }
    expect(reducer(state, action)).toEqual({
      selectedCategories: [],
    })
  })
})

describe('with SELECT_CATEGORY', () => {
  it('returns the correct state', () => {
    const state = { selectedCategories: [{ id: 1234 }] }
    const action = { type: '@filters/SELECT_CATEGORY', category: { id: 321 } }
    expect(reducer(state, action)).toEqual({
      selectedCategories: [{ id: 1234 }, { id: 321 }],
    })
  })
})

describe('with UNSELECT_CATEGORY', () => {
  it('returns the correct state', () => {
    const state = { selectedCategories: [{ id: 1234 }, { id: 321 }] }
    const action = { type: '@filters/UNSELECT_CATEGORY', category: { id: 321 } }
    expect(reducer(state, action)).toEqual({
      selectedCategories: [{ id: 1234 }],
    })
  })
})
