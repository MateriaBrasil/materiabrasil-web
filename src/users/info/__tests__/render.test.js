import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../Avatar', () => props => <div {...props}>Avatar</div>)
jest.mock('../Album', () => props => <div {...props}>Album</div>)

it('renders correctly', () => {
  const props = { currentUser: { id: 1234 } }
  const infoProps = {
    id: 1234,
    firstName: 'foo-name',
    lastName: 'foo-last',
    albums: [1, 2, 3],
  }
  const tree = renderer.create(render(props)(infoProps)).toJSON()
  expect(tree).toMatchSnapshot()
})