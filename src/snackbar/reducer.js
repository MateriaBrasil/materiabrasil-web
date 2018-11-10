import identity from 'lodash/identity'

import prefixedReducer, { sufix } from '../store/prefixedReducer'

const initialState = {
  message: null,
}

const reducers = {
  SET_MESSAGE: (state, action) => ({
    ...state,
    message: action.message,
  }),
  CLEAR_MESSAGE: state => ({
    ...state,
    message: null,
  }),
}

const reducer = (state = initialState, action = {}) =>
  (reducers[sufix(action.type)] || identity)(state, action)

export default prefixedReducer({
  prefix: '@snackbar',
  reducer,
})
