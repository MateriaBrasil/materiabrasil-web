import React from 'react'
import renderer from 'react-test-renderer'

import New from '../New'

jest.mock('croods', () => ({
  New: props => <div {...props}>New - {props.children}</div>,
}))

it('renders correctly', () => {
  const tree = renderer.create(<New />).toJSON()
  expect(tree).toMatchSnapshot()
})
