import React from 'react'
import renderer from 'react-test-renderer'

import renderForm from '../renderForm'

jest.mock('../Form', props => <div {...props}>Form</div>)

it('renders correctly', () => {
  const Component = renderForm({ create: jest.fn() })
  const tree = renderer.create(<Component />).toJSON()
  expect(tree).toMatchSnapshot()
})
