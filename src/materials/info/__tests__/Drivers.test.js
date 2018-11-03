import React from 'react'
import renderer from 'react-test-renderer'

import Drivers from '../Drivers'

it('renders correctly', () => {
  const props = {
    materialityDriver: 50,
    manufactureDriver: 50,
    managementDriver: 50,
    socialDriver: 50,
  }
  const tree = renderer.create(<Drivers {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
