import React from 'react'
import renderer from 'react-test-renderer'

import New from '../New'

jest.mock('croods', () => ({
  New: props => <div {...props}>New - {props.render([{ foo: 'bar' }])}</div>,
}))

jest.mock('../renderNew', () =>
  jest.fn(props => list => <div {...props}>renderNew</div>),
)

it('render correctly', () => {
  const tree = renderer.create(<New />).toJSON()
  expect(tree).toMatchSnapshot()
})
