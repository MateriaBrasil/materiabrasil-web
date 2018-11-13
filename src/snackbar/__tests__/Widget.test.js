import React from 'react'
import renderer from 'react-test-renderer'

import Widget from '../Widget'

jest.mock('@material-ui/core/Snackbar', () => props => (
  <div {...props}>Snackbar - {props.children}</div>
))

it('renders correctly', () => {
  const props = {
    actions: { open: jest.fn() },
  }
  const tree = renderer.create(<Widget {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
