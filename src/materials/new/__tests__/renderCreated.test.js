import React from 'react'
import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const snackbar = { actions: { setMessage: jest.fn() } }
  const Component = renderCreated({ foo: 'bar', snackbar })
  const tree = renderer.create(<Component bar="foo" id={1234} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(snackbar.actions.setMessage).toHaveBeenCalledWith(
    'Material cadastrado com sucesso',
  )
})
