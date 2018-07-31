import React from 'react'
import renderer from 'react-test-renderer'

import List from '../List'
import renderList from '../renderList'


jest.mock('../renderList', () =>
  jest.fn(props => list => (
    <div {...props} list={list}>
      renderList
    </div>
  )),
)

jest.mock('croods', () => ({
  List: props => <div {...props}>List - {props.render([{ foo: 'bar' }])}</div>,
}))

const tree = renderer.create(<List type="foo" id="bar" />).toJSON()

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})

it('Calls render prop', () => {
  expect(renderList).toHaveBeenCalledWith({ type: 'foo', id: 'bar' })
})
