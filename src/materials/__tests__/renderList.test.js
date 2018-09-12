import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('croods', () => ({
  List: props => <div {...props}>{props.children}</div>,
}))

jest.mock('../list/render', () => props => list => <div>List</div>)
jest.mock('../../search/Search', () => props => <div {...props}>Search</div>)

jest.mock('filters/Filters', () => ({ render, ...props }) => (
  <div {...props}>
    Filters -
    {render({
      selectedCategories: [{ id: 123, name: 'foo-name' }],
    })}
  </div>
))

it('renders correctly', () => {
  const props = {}
  const routeProps = { history: { push: jest.fn() } }
  const tree = renderer.create(renderList(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
