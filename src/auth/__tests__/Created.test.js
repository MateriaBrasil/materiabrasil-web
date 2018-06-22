import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const actions = { setCurrent: jest.fn() }
  const user = { actions }
  const created = { foo: 'bar' }

  const tree = renderer
    .create(<Created user={user} created={created} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
  expect(actions.setCurrent).toHaveBeenCalledWith(created)
})
