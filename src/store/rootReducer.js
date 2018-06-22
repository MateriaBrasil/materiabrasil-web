import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { createReducer } from 'croods'

const reducers = {
  form,
  materials: createReducer('materials'),
  auth: createReducer('auth'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
