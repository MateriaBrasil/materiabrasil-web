import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const created = { foo: 'bar' }
  const setCurrentUser = jest.fn()

  const tree = renderer
    .create(<Created created={created} setCurrentUser={setCurrentUser} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
  expect(setCurrentUser).toHaveBeenCalledWith(created)
})
