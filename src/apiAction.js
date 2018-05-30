import humps from 'lodash-humps'

import snakeCase from './snakeCase'
import parseError from './parseError'

const fetchOptions = ({ method, params, headers = {} }) => {
  const options = {
    method: method ? method : 'get',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  }

  if (params) {
    options.body = JSON.stringify(snakeCase(params))
  }

  return options
}

const url = ({ path }) => `${process.env.REACT_APP_API_URL}${path}`

export const apiAction = options => dispatch =>
  dispatchAction(dispatch, options)

const jsonResponse = async response => {
  const body = await response.text()
  const contentType = response.headers.get('content-type')

  let json
  if (contentType && contentType.match(/application\/json/)) {
    json = humps(JSON.parse(body))
  } else {
    json = {
      id: `${response.status}`,
      message: body,
    }
  }

  return json
}

const dispatchError = (dispatch, options) => async response => {
  const { prefix, requestAttributes } = options

  const json = await jsonResponse(response)

  dispatch({
    type: `${prefix}_FAILURE`,
    ...requestAttributes,
    error: parseError(json),
  })
}

const dispatchResponse = (dispatch, options) => async response => {
  const { prefix, processResponse, requestAttributes } = options

  const json = await jsonResponse(response)

  if (response.ok) {
    dispatch({
      type: `${prefix}_SUCCESS`,
      ...(processResponse && (await processResponse(response, json))),
    })
  } else {
    dispatch({
      type: `${prefix}_FAILURE`,
      ...requestAttributes,
      error: parseError(json),
    })
  }
}

export const dispatchAction = async (dispatch, options) => {
  const { prefix, requestAttributes } = options

  dispatch({
    type: `${prefix}_REQUEST`,
    ...requestAttributes,
  })

  return fetch(url(options), fetchOptions(options)).then(
    dispatchResponse(dispatch, options),
    dispatchError(dispatch, options),
  )
}

export default apiAction
