import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { createReducer } from 'croods'

import currentUser from '../currentUser/reducer'

const reducers = {
  form,
  currentUser,
  materials: createReducer('materials'),
  signUp: createReducer('signUp'),
  signIn: createReducer('signIn'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
