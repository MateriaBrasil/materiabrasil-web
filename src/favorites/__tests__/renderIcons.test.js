import React from 'react'
import renderer from 'react-test-renderer'

import renderIcons from '../renderIcons'

jest.mock('../Destroy', () => props => <div {...props}>Destroy</div>)

it('renders correctly', () => {
  const props = {
    showDestroy: true,
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
