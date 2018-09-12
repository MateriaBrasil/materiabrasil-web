import renderer from 'react-test-renderer'

import renderCategory from '../renderCategory'

it('render correctly', () => {
  const props = {
    onChangeExpanded: jest.fn(),
    materialCategories: [{ id: 1234 }, { id: 21 }],
    rootCategory: { id: 321 },
    filters: { selectedCategories: [{ id: 321 }], selectCategory: jest.fn() },
  }
  const category = { id: '1234', name: 'foo-name', children: [] }
  const tree = renderer.create(renderCategory(props)(category)).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('when calling onChange', () => {
  it('calls  filterAction correctly', () => {
    const selectCategory = jest.fn()
    const props = {
      onChangeExpanded: jest.fn(),
      materialCategories: [{ id: 1234 }, { id: 21 }],
      rootCategory: { id: 321 },
      filters: {
        selectedCategories: [{ id: 321 }],
        actions: { selectCategory },
      },
    }
    const category = { id: '1234', name: 'foo-name', children: [] }
    const tree = renderer.create(renderCategory(props)(category)).toJSON()
    const checkbox = tree.children[0].children[0].children[1]
    checkbox.props.onChange({ target: {} })
    expect(selectCategory).toHaveBeenCalledWith(category)
  })
})
