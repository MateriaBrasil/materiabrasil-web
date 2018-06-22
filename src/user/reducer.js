import initialState from './reducer/initialState'

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case '@user/SET_CURRENT': {
      return { ...state, current: action.user }
    }
    default:
      return state
  }
}
