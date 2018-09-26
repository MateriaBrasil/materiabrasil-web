import filter from 'lodash/filter'

const initialState = {
  list: [],
  open: false,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case '@comparison/RESET':
      return initialState
    case '@comparison/ADD':
      return {
        ...state,
        list: [
          ...filter(state.list, ({ id }) => id !== action.item.id),
          action.item,
        ],
        open: state.open || state.list.length > 0,
      }
    case '@comparison/REMOVE':
      return {
        ...state,
        list: filter(state.list, ({ id }) => id !== action.item.id),
      }
    case '@comparison/OPEN':
      return {
        ...state,
        open: true,
      }
    case '@comparison/CLOSE':
      return {
        ...state,
        open: false,
      }
    default:
      return state
  }
}
