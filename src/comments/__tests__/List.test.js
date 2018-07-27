import React from 'react'
import renderer from 'react-test-renderer'

import List from '../List'
import renderList from '../renderList'

jest.mock('../renderList', () =>
  jest.fn().mockReturnValue('Render prop - (../renderList)'),
)
jest.mock('croods', () => ({
  List: props => <div {...props}>List - {props.children}</div>,
}))

const tree = renderer.create(<List type="foo" id="bar" />).toJSON()

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})

it('Calls render prop', () => {
  expect(renderList).toHaveBeenCalledTimes(1)
})
