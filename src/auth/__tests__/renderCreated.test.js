import React from 'react'
import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

jest.mock('../Created', () => props => <div {...props}>Created</div>)

it('renders correctly', () => {
  const tree = renderer.create(renderCreated({})({})).toJSON()
  expect(tree).toMatchSnapshot()
})
