import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { createReducer } from 'croods'

const reducers = {
  form,
  currentUser: createReducer('currentUser'),
  materials: createReducer('materials'),
  comments: createReducer('comments', { addCreatedToTop: true }),
  favorites: createReducer('favorites'),
  signUp: createReducer('signUp'),
  signIn: createReducer('signIn'),
  signOut: createReducer('signOut'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
