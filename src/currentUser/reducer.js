import initialState from './reducer/initialState'

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case '@currentUser/SET': {
      return action.user
    }
    default:
      return state
  }
}
