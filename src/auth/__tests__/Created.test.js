import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const actions = { set: jest.fn() }
  const currentUser = { actions }
  const created = { foo: 'bar' }

  const tree = renderer
    .create(<Created currentUser={currentUser} created={created} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
  expect(actions.set).toHaveBeenCalledWith(created)
})
