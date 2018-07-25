import React from 'react'
import renderer from 'react-test-renderer'

import List from '../List'

jest.mock('croods', () => ({
  List: props => <div {...props}>List - {props.children}</div>,
}))

it('renders correctly', () => {
  const tree = renderer.create(<List />).toJSON()
  expect(tree).toMatchSnapshot()
})
