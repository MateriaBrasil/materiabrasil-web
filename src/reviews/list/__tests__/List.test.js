import React from 'react'
import renderer from 'react-test-renderer'

import List from '../List'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../Reviews', () => props => <div {...props}>Reviews</div>)

it('renders correctly', () => {
  const props = { list: [1, 2, 3], id: 1112 }
  const tree = renderer.create(<List {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
