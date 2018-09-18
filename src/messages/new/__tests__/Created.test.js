import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

it('renders correctly', () => {
  const goBack = jest.fn()
  const props = { history: { goBack } }

  const tree = renderer.create(<Created {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(goBack).toHaveBeenCalledWith()
})
