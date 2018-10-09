import identity from 'lodash/identity'
import filter from 'lodash/filter'

import prefixedReducer, { sufix } from '../store/prefixedReducer'

const initialState = {
  list: [],
  open: false,
}

const reducers = {
  RESET: () => initialState,
  ADD: (state, action) => {
    return {
      ...state,
      list: [
        ...filter(state.list, ({ id }) => id !== action.item.id),
        action.item,
      ],
      open: state.open || state.list.length > 0,
    }
  },
  REMOVE: (state, action) => {
    return {
      ...state,
      list: filter(state.list, ({ id }) => id !== action.item.id),
    }
  },
  OPEN: state => ({ ...state, open: true }),
  CLOSE: state => ({ ...state, open: false }),
}

const reducer = (state = initialState, action = {}) =>
  (reducers[sufix(action.type)] || identity)(state, action)

export default prefixedReducer({
  prefix: '@comparison',
  reducer,
})
