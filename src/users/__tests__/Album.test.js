import React from 'react'
import renderer from 'react-test-renderer'

import Album from '../Album'

jest.mock('../../favorites/List', () => props => <div {...props}>List</div>)

it('renders correctly', () => {
  const props = { name: 'foo-name', bar: 'foo' }
  const tree = renderer.create(<Album {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
