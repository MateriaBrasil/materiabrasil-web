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
      }
    }
    case 'SUCCESS': {
      return {
        ...state,
        requestingInfo: false,
        current: action.current,
      }
    }
    default:
      return state
  }
}
