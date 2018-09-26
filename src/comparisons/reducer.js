import filter from 'lodash/filter'

const initialState = {
  list: [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case '@comparisons/RESET':
      return initialState
    case '@comparisons/ADD':
      return {
        ...state,
        list: [
          ...filter(state.list, ({ id }) => id !== action.item.id),
          action.item,
        ],
      }
    case '@comparisons/REMOVE':
      return {
        ...state,
        list: filter(state.list, ({ id }) => id !== action.item.id),
      }
    default:
      return state
  }
}
