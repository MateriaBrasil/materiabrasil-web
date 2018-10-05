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
      return add(state, action)
    case '@comparison/REMOVE':
      return remove(state, action)
    case '@comparison/OPEN':
      return open(state, action)
    case '@comparison/CLOSE':
      return close(state, action)
    default:
      return state
  }
}

function add(state, action) {
  return {
    ...state,
    list: [
      ...filter(state.list, ({ id }) => id !== action.item.id),
      action.item,
    ],
    open: state.open || state.list.length > 0,
  }
}

function remove(state, action) {
  return {
    ...state,
    list: filter(state.list, ({ id }) => id !== action.item.id),
  }
}

function open(state, action) {
  return {
    ...state,
    open: true,
  }
}

function close(state, action) {
  return {
    ...state,
    open: false,
  }
}
