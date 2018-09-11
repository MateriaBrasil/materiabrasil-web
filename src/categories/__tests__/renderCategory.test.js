import renderer from 'react-test-renderer'

import renderCategory from '../renderCategory'

it('render correctly', () => {
  const props = {
    onChangeExpanded: jest.fn(),
    materialCategories: [{ id: 1234 }, { id: 21 }],
    rootCategory: { id: 321 },
  }
  const onSelect = jest.fn()
  const category = { id: '1234', name: 'foo-name', children: [] }
  const tree = renderer
    .create(renderCategory(props, onSelect)(category))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
