import apiAction from '../../../apiAction'
import { info } from '../../actions'

jest.mock('../../../apiAction', () => jest.fn(options => options))

it('uses api action with correct configuration', () => {
  const { processResponse } = info(1)
  const current = { foo: 'bar' }

  expect(apiAction).toHaveBeenCalledWith({
    prefix: '@material/INFO',
    path: '/materials/1',
    method: 'GET',
    requestAttributes: {},
    processResponse: expect.anything(),
  })

  expect(processResponse({}, { foo: 'bar' })).toEqual({ current })
})
