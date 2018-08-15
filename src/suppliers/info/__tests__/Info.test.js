import React from 'react'
import renderer from 'react-test-renderer'

import Info from '../Info'

jest.mock('../../../addresses/Addresses', () => props => (
  <div {...props}>Addresses</div>
))

jest.mock('../../../imageUpload/Avatar', () => props => (
  <div {...props}>Avatar</div>
))

it('renders correctly', () => {
  const current = {
    id: 1234,
    name: 'foo-name',
    description: 'foo-description',
    phone: '0000-0000',
    userId: 1234,
    imageUrl: '/foo/url',
  }
  const props = { currentUser: { id: 1234 }, current }
  const tree = renderer.create(<Info {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
