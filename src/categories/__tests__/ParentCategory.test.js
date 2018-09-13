import React from 'react'
import renderer from 'react-test-renderer'

import ParentCategory from '../ParentCategory'

it('render correctly', () => {
  const props = {
    onChangeExpanded: jest.fn(),
    materialCategories: [{ id: 1234 }, { id: 21 }],
    category: {
      id: 321,
      name: 'foo-name',
      children: [{ id: 222, name: 'foo-children', children: [] }],
    },
  }
  const tree = renderer.create(<ParentCategory {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
