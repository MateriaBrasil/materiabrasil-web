import { combineReducers } from 'redux'

import materials from '../materials/reducer'
import material from '../material/reducer'

const reducers = {
  materials,
  material,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
