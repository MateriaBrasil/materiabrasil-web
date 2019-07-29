import React from 'react'
import renderer from 'react-test-renderer'

import CreatedMessage from '../CreatedMessage'

it('renders correctly', () => {
  const props = {
    closeDialog: jest.fn(),
    snackbar: {
      actions: {
        setMessage: jest.fn(),
      },
    },
  }
  const tree = renderer.create(<CreatedMessage {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
