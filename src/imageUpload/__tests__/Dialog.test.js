import React from 'react'
import renderer from 'react-test-renderer'

import Dialog from '../Dialog'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))
jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Dialog />).toJSON()
  expect(tree).toMatchSnapshot()
})
