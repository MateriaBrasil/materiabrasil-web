import filter from 'lodash/filter'

const initialState = {
  selectedCategories: [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case '@filters/RESET':
      return initialState
    case '@filters/SELECT_CATEGORY':
      return {
        ...state,
        selectedCategories: [...state.selectedCategories, action.category],
      }
    case '@filters/UNSELECT_CATEGORY':
      return {
        ...state,
        selectedCategories: filter(
          state.selectedCategories,
          ({ id }) => id !== action.category.id,
        ),
      }
    default:
      return state
  }
}
