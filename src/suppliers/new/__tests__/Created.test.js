import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const setCurrentUser = jest.fn()
  const props = {
    setCurrentUser,
    location: {},
    currentUser: { suppliers: [] },
    supplier: { id: 123 },
    snackbar: {
      actions: {
        setMessage: jest.fn(),
      },
    },
  }

  const tree = renderer.create(<Created {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(setCurrentUser).toHaveBeenCalledWith({ suppliers: [props.supplier] })
  expect(props.snackbar.actions.setMessage).toHaveBeenCalledWith(
    'Fornecedor cadastrado com sucesso',
  )
})
