import React from 'react'
import renderer from 'react-test-renderer'

import renderComparison from '../renderComparison'

jest.mock('../Screen', () => props => <div>RenderComparison</div>)

it('renders correctly', () => {
  const Component = renderComparison('foo')
  const tree = renderer.create(<Component />).toJSON()
  expect(tree).toMatchSnapshot()
})
