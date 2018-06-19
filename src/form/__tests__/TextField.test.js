import React from 'react'
import renderer from 'react-test-renderer'

import TextField from '../TextField'

jest.mock('redux-form', () => ({
  Field: props => <div {...props}>{props.children}</div>,
}))

it('renders correctly', () => {
  const tree = renderer.create(<TextField />).toJSON()
  expect(tree).toMatchSnapshot()
})
