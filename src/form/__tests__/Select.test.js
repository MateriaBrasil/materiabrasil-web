import React from 'react'
import renderer from 'react-test-renderer'

import Select from '../Select'

jest.mock('@material-ui/core/TextField', () => props => (
  <div {...props}>{props.children}</div>
))

it('renders correctly', () => {
  const props = {
    bar: 'foo',
    options: [
      { value: 1, label: 'foo1-label' },
      { value: 2, label: 'foo2-label' },
      { value: 3, label: 'foo3-label' },
    ],
    input: { foo: 'bar' },
  }
  const tree = renderer.create(Select(props)).toJSON()
  expect(tree).toMatchSnapshot()
})
