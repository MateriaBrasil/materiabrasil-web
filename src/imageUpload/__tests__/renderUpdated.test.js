import React from 'react'
import renderer from 'react-test-renderer'

import renderUpdated from '../renderUpdated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const redirectUrl = '/foo/url'
  const snackbar = { actions: { setMessage: jest.fn() } }
  const props = { redirectUrl, snackbar }
  const tree = renderer.create(renderUpdated(props)()).toJSON()
  expect(tree).toMatchSnapshot()
  expect(snackbar.actions.setMessage).toHaveBeenCalledWith(
    'Imagem enviada com sucesso',
  )
})
