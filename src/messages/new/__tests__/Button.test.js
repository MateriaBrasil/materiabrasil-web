import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../Button'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

it('renders correctly', () => {
  const props = { id: '123', type: 'suppliers' }

  const tree = renderer.create(<Button {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
