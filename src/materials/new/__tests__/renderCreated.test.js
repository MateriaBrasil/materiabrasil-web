import React from 'react'
import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const snackbar = { actions: { setMessage: jest.fn() } }
  const setCurrentUser = jest.fn()
  const Component = renderCreated({
    foo: 'bar',
    snackbar,
    setCurrentUser,
    currentUser: { suppliers: [{ id: 123, materials: [] }] },
  })
  const tree = renderer.create(<Component bar="foo" id={1234} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(snackbar.actions.setMessage).toHaveBeenCalledWith(
    'Material cadastrado com sucesso',
  )

  expect(setCurrentUser).toHaveBeenCalledWith({
    suppliers: [{ id: 123, materials: [{ id: 1234, bar: 'foo' }] }],
  })
})
