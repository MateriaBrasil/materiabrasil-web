import React from 'react'
import renderer from 'react-test-renderer'

import renderCategory from '../renderCategory'

it('render correctly', () => {
  const props = {
    materialCategories: [{ id: 1234 }, { id: 21 }],
  }
  const onSelect = jest.fn()
  const category = { id: '1234', name: 'foo-name', children: [<h1 />] }
  const tree = renderer
    .create(renderCategory(props, onSelect)(category))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
