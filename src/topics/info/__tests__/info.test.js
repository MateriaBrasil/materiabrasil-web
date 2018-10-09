import React from 'react'
import renderer from 'react-test-renderer'
import moment from 'moment-timezone'

import Info from '../Info'

jest.mock('../../../comments/Comments', () => props => (
  <div {...props}>Comments</div>
))

jest.mock('../../../moment', () => () => ({ fromNow: () => '10h' }))

it('renders correctly', () => {
  const props = {
    id: 1,
    user: { firstName: 'foo-name', lastName: 'foo-lastName' },
    subject: 'foo subject',
    text: 'foo text',
    createdAt: '2010-10-10 10:10:10',
  }
  const tree = renderer.create(<Info {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
