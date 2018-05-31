import { apiPrefix } from '../../store/apiReducer'

import info from './info'

export default (state, action = {}) => {
  switch (apiPrefix(action.type)) {
    case 'INFO': {
      return info(state, action)
    }
    default:
      return state
  }
}
