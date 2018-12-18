import identity from 'lodash/identity'
import prefixedReducer, { sufix } from '../store/prefixedReducer'

const initialState = {
  categoryFilled: {},
}

const reducers = {
  UPDATE_MATERIAL_CATEGORY: (state, action) => {
    return {
      [action.materialId]: true,
    }
  },
}

const reducer = (state = initialState, action = {}) =>
  (reducers[sufix(action.type)] || identity)(state, action)

export default prefixedReducer({
  prefix: '@categoryFilled',
  reducer,
})
