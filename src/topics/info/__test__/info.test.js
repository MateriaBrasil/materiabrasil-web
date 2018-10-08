import React from 'react'
import renderer from 'react-test-renderer'

import Info from '../Info'

jest.mock('../../../comments/Comments', () => props => (
  <div {...props}>Comments</div>
))

it('renders correctly', () => {
  const props = {
    id: 1,
    user: { firstName: 'foo-name', lastName: 'foo-lastName' },
    subject: 'foo subject',
    text: 'foo text',
    createdAt: '2018-10-10 00:00:00',
  }
  const tree = renderer.create(<Info {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
