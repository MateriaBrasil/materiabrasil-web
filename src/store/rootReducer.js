import { combineReducers } from 'redux'
import { createReducer } from 'croods'

import materials from '../materials/reducer'

const reducers = {
  materials,
  material: createReducer('material'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
