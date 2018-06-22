import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { createReducer } from 'croods'

import user from '../user/reducer'

const reducers = {
  form,
  user,
  materials: createReducer('materials'),
  signUp: createReducer('signUp'),
  signIn: createReducer('signIn'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
