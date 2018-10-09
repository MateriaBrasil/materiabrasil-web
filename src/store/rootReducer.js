import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { createReducer } from 'croods'

import filters from 'filters/reducer'
import comparison from 'comparison/reducer'

const reducers = {
  form,
  currentUser: createReducer('currentUser'),
  materials: createReducer('materials'),
  comments: createReducer('comments', { addCreatedToTop: true }),
  favorites: createReducer('favorites'),
  signUp: createReducer('signUp'),
  signIn: createReducer('signIn'),
  signOut: createReducer('signOut'),
  users: createReducer('users'),
  reviews: createReducer('reviews'),
  searches: createReducer('searches'),
  suppliers: createReducer('suppliers'),
  addresses: createReducer('addresses'),
  categories: createReducer('categories'),
  materialCategories: createReducer('materialCategories'),
  messages: createReducer('messages'),
  password: createReducer('password'),
  topics: createReducer('topics', { addCreatedToTop: true }),
  filters,
  comparison,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
