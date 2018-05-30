import apiAction from '../apiAction'

export const startUp = () => ({ type: '@materials/START_UP' })

export const list = () =>
  apiAction({
    prefix: '@materials/LIST',
    path: 'materials/',
    method: 'GET',
    requestAttributes: {},
    processResponse: (response, list) => ({ list }),
  })
