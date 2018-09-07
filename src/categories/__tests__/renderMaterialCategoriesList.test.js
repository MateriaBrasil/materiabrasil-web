import React from 'react'
import renderer from 'react-test-renderer'

import renderMaterialCategoriesList from '../renderMaterialCategoriesList'

jest.mock('croods', () => ({
  New: props => <div {...props}>New - {props.render([{ foo: 'bar' }])}</div>,
}))

it('renders correctly', () => {
  const props = {
    parent: { multipleChoice: true },
    categories: [{ id: 1234, name: 'foo' }, { id: 4321, name: 'bar' }],
  }
  const list = ['foo-category', 'foo-category2']
  const listProps = { actions: { setList: jest.fn() } }

  const tree = renderer
    .create(renderMaterialCategoriesList(props)(list, listProps))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
