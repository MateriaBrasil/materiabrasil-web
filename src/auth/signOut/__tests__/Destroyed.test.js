import React from 'react'
import renderer from 'react-test-renderer'
import Destroyed from '../Destroyed'

it('', () => {
  const setCurrentUser = jest.fn()
  const props = { setCurrentUser }

  renderer.create(<Destroyed {...props} />)
  expect(global.localStorage.removeItem).toHaveBeenCalledWith('authCredentials')
  expect(setCurrentUser).toHaveBeenCalledWith(null)
})
