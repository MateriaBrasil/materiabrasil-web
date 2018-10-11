import React from 'react'
import renderer from 'react-test-renderer'

import RenderForm from '../renderForm'

jest.mock('../Form', () => props => newProps => <div {...props}>Form</div>)

it('renders correctly', () => {
  const tree = renderer.create(<RenderForm />).toJSON()
  expect(tree).toMatchSnapshot()
})
