import { combineReducers } from 'redux'
import { createReducer } from 'croods'

const reducers = {
  materials: createReducer('materials'),
  material: createReducer('material'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
