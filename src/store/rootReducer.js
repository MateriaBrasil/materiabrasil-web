import { combineReducers } from 'redux'

import materials from '../materials/reducer'

const reducers = {
  materials,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
