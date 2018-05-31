import { apiSuffix } from '../../store/apiReducer'

export default (state, action = {}) => {
  switch (apiSuffix(action.type)) {
    case 'REQUEST': {
      return {
        ...state,
        infoError: null,
        requestingInfo: true,
      }
    }
    case 'FAILURE': {
      return {
        ...state,
        requestingInfo: false,
        infoError: action.error.message,
        startingUp: false,
      }
    }
    case 'SUCCESS': {
      return {
        ...state,
        requestingInfo: false,
        current: action.current,
        startingUp: false,
      }
    }
    default:
      return state
  }
}
