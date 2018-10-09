import React from 'react'
import renderer from 'react-test-renderer'

import New from '../New'

jest.mock('../Form', () => props => <div {...props}>Form</div>)

it('renders correctly', () => {
  const props = { match: { params: { id: 1234 } } }
  const tree = renderer.create(<New {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
