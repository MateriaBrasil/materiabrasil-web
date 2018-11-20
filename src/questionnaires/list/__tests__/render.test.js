import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('croods', () => ({
  List: props => <div {...props}>{props.children}</div>,
}))

it('renders correctly', () => {
  const routeProps = { match: { params: { id: 123 } } }
  const Component = render({ foo: 'bar', ...routeProps })

  const tree = renderer.create(<Component bar="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
