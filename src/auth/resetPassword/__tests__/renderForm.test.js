import React from 'react'
import renderer from 'react-test-renderer'

import renderForm from '../renderForm'

jest.mock('../Form', () => props => <div {...props}>Form</div>)

it('renders correctly', () => {
  const Form = renderForm({ bar: 'foo' })
  const tree = renderer.create(<Form />).toJSON()
  expect(tree).toMatchSnapshot()
})
