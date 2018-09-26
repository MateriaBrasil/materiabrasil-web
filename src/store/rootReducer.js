import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { createReducer } from 'croods'

import filters from 'filters/reducer'
import comparisons from 'comparisons/reducer'

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
  topics: createReducer('topics', { addCreatedToTop: true }),
  filters,
  comparisons,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
