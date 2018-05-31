import apiAction from '../../../apiAction'
import { list } from '../../actions'

jest.mock('../../../apiAction', () => jest.fn(options => options))

it('uses api action with correct configuration', () => {
  const { processResponse } = list()

  expect(apiAction).toHaveBeenCalledWith({
    prefix: '@materials/LIST',
    path: '/materials',
    method: 'GET',
    requestAttributes: {},
    processResponse: expect.anything(),
  })

  expect(processResponse({}, [1, 2, 3])).toEqual({ list: [1, 2, 3] })
})
