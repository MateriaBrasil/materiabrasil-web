import React from 'react'
import renderer from 'react-test-renderer'

import SelectField from '../SelectField'

jest.mock('redux-form', () => ({
  Field: props => <div {...props}>Field</div>,
}))

it('renders correctly', () => {
  const tree = renderer
    .create(<SelectField component={jest.fn()} foo="bar" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
