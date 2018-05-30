import { split, first, last, includes, initial, join } from 'lodash'
import { parseType } from './prefixedReducer'

export const parseApiType = type => {
  const [, actionSufix] = parseType(type)
  const parsedType = split(actionSufix, '_')
  const sufix = last(parsedType)
  const prefix = join(initial(parsedType), '_')
  return [prefix, sufix]
}

export const apiPrefix = type => first(parseApiType(type))
export const apiSufix = type => last(parseApiType(type))

export const apiAction = type =>
  includes(['REQUEST', 'SUCCESS', 'FAILURE'], apiSufix(type))

export default ({ api, reducer }) => (state, action) => {
  const computedState = state || reducer()

  if (!action) {
    return computedState
  }

  if (apiAction(action.type)) {
    return api(computedState, action)
  }

  return reducer(computedState, action)
}
