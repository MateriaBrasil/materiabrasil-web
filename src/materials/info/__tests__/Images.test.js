import React from 'react'
import renderer from 'react-test-renderer'

import Images from '../Images'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

it('renders correctly', () => {
  const props = {
    id: 1234,
    name: 'foo-name',
    listImageUrl: 'list-url',
    highlightImageUrl: 'high-url',
  }
  const tree = renderer.create(<Images {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
