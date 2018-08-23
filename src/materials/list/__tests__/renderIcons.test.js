import React from 'react'
import renderer from 'react-test-renderer'

import renderIcons from '../renderIcons'

jest.mock('../../../favorites/New', () => props => <div {...props}>New</div>)

jest.mock('../TechnicalSpecification', () => props => (
  <div {...props}>TechnicalSpecification</div>
))

it('renders correctly', () => {
  const props = {
    currentUser: 'foo-user',
    id: 1122,
    material: {
      name: 'foo',
      imageUrl: 'bar',
      id: 1234,
      highlightedImageUrl: 'foo-url',
      listImageUrl: 'list',
    },
  }

  const tree = renderer.create(renderIcons(props)()).toJSON()
  expect(tree).toMatchSnapshot()
})
