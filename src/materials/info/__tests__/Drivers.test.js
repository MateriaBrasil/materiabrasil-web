import React from 'react'
import renderer from 'react-test-renderer'

import Drivers from '../Drivers'

it('renders correctly', () => {
  const props = {
    firstDriver: 50,
    secondDriver: 50,
    thirdDriver: 50,
    fourthDriver: 50,
  }
  const tree = renderer.create(<Drivers {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
