import { navigate } from '@reach/router'

import renderCreated from '../renderCreated'

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

it('execute navigate when called', () => {
  renderCreated({})(true)
  expect(navigate).toBeCalledWith(`/auth/sign-in`)
})
