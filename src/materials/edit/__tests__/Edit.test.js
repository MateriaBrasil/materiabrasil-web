import React from 'react'
import renderer from 'react-test-renderer'

import Edit from '../Edit'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

jest.mock('../Form', () => props => <div {...props}>Form</div>)

it('renders correctly', () => {
  const props = { match: { params: { id: 1234 } } }
  const tree = renderer.create(<Edit {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
