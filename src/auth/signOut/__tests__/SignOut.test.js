import React from 'react'
import renderer from 'react-test-renderer'

import SignOut from '../SignOut'

jest.mock('croods', () => ({ Destroy: props => <div {...props}>Destroy</div> }))

it('renders correctly', () => {
  const tree = renderer.create(<SignOut foo="bar" />).toJSON()
  expect(tree).toMatchSnapshot()
})
