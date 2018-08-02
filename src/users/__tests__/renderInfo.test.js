import React from 'react'
import renderer from 'react-test-renderer'

import renderInfo from '../renderInfo'

jest.mock('../Album', () => props => <div {...props}>Album</div>)

it('renders correctly', () => {
  const props = { currentUser: { id: 11111 } }
  const infoProps = {
    id: 2222,
    name: 'foo-name',
    albums: [[1, 2, 3], [3, 2, 1]],
  }
  const tree = renderer.create(renderInfo(props)(infoProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
