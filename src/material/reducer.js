import apiReducer from '../store/apiReducer'
import prefixedReducer from '../store/prefixedReducer'

import api from './reducer/api'
import initialState from './reducer/initialState'

const reducer = (state = initialState, action = {}) => state

export default prefixedReducer({
  prefix: '@material',
  reducer: apiReducer({ api, reducer }),
})
