import React from 'react'
import renderer from 'react-test-renderer'

import Card from '../Card'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link-{props.children}</div>
))

it('renders correctly', () => {
  const props = {
    material: {
      name: 'foo',
      imageUrl: 'bar',
      id: 1234,
      highlightedImageUrl: 'foo-url',
      listImageUrl: 'list',
    },
  }
  const tree = renderer.create(<Card {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
