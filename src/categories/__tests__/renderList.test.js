import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('croods', () => ({
  List: props => <div {...props}>List - {props.render()}</div>,
}))

jest.mock('../renderMaterialCategoriesList', () => props => categories => (
  <div {...props}>renderMaterialCategoriesList</div>
))
it('render correctly', () => {
  const props = { match: { params: { id: '1234' } } }
  const categories = ['foo', 'bar']
  const tree = renderer.create(renderList(props)(categories)).toJSON()
  expect(tree).toMatchSnapshot()
})
