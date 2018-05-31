import apiAction from '../apiAction'

export const startUp = () => ({ type: '@material/START_UP' })

export const info = id =>
  apiAction({
    prefix: '@material/INFO',
    path: `/materials/${id}`,
    method: 'GET',
    requestAttributes: {},
    processResponse: (response, current) => ({ current }),
  })
