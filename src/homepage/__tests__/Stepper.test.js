import React from 'react'
import renderer from 'react-test-renderer'
import Stepper from '../Stepper'

it('renders correctly', () => {
  const tree = renderer.create(<Stepper />).toJSON()
  expect(tree).toMatchSnapshot()
})
