import { combineReducers } from 'redux'
import { createReducer } from 'croods'

const reducers = {
  materials: createReducer('materials'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
