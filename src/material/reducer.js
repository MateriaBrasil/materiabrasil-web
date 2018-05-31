import apiReducer from '../store/apiReducer'
import prefixedReducer, { suffix } from '../store/prefixedReducer'

import api from './reducer/api'
import initialState from './reducer/initialState'

const reducer = (state = initialState, action = {}) => {
  switch (suffix(action.type)) {
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
  prefix: '@material',
  reducer: apiReducer({ api, reducer }),
})
