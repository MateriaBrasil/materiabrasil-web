import filter from 'lodash/filter'

import findCategory from 'categories/findCategory'
import rootCategory from 'categories/rootCategory'

const initialState = {
  categories: [],
  selectedCategories: [],
}

const selectCategory = (state, action) => {
  const root = rootCategory(state.categories, action.category)

  if (root.multipleChoice) {
    return {
      ...state,
      selectedCategories: [...state.selectedCategories, action.category],
    }
  }

  return {
    ...state,
    selectedCategories: [
      ...filter(state.selectedCategories, ({ id }) => {
        const category = findCategory(state.categories, id)
        return rootCategory(state.categories, category) !== root
      }),
      action.category,
    ],
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case '@filters/SET_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
      }
    case '@filters/SELECT_CATEGORY':
      return selectCategory(state, action)
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
