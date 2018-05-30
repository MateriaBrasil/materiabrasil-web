import apiReducer from '../store/apiReducer'
import prefixedReducer, { sufix } from '../store/prefixedReducer'

import api from './reducer/api'

const initialState = {
  list: null,
  listing: false,
  listError: false,
  startingUp: true,
}

const reducer = (state = initialState, action = {}) => {
  switch (sufix(action.type)) {
    case 'START_UP': {
      return {
        ...state,
        startingUp: false,
      }
    }
    default:
      return state
  }
}

export default prefixedReducer({
  prefix: '@materials',
  reducer: apiReducer({ api, reducer }),
})
