import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { createReducer } from 'croods'

import filters from 'filters/reducer'
import comparison from 'comparison/reducer'
import snackbar from 'snackbar/reducer'
import categoryFilled from 'categories/reducer'

const reducers = {
  form,
  currentUser: createReducer('currentUser'),
  materials: createReducer('materials'),
  publishMaterials: createReducer('publishMaterials'),
  editAlbum: createReducer('editAlbum'),
  comments: createReducer('comments', { addCreatedToTop: true }),
  favorites: createReducer('favorites'),
  signUp: createReducer('signUp'),
  signIn: createReducer('signIn'),
  signOut: createReducer('signOut'),
  users: createReducer('users'),
  albums: createReducer('albums'),
  reviews: createReducer('reviews'),
  searches: createReducer('searches'),
  suppliers: createReducer('suppliers'),
  addresses: createReducer('addresses'),
  questionnaires: createReducer('questionnaires'),
  answers: createReducer('answers'),
  categories: createReducer('categories'),
  materialCategories: createReducer('materialCategories'),
  messages: createReducer('messages'),
  password: createReducer('password'),
  subscriptions: createReducer('subscriptions'),
  albumUsers: createReducer('albumUsers'),
  resetPassword: createReducer('resetPassword'),
  recalculate: createReducer('recalculate'),
  topics: createReducer('topics', { addCreatedToTop: true }),
  filters,
  comparison,
  snackbar,
  categoryFilled,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
