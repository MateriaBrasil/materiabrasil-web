import React from 'react'
import renderer from 'react-test-renderer'

import renderEmailSent from '../renderEmailSent'

jest.mock('../EmailSent', props => routeProps => (
  <div {...props} {...routeProps}>
    EmailSent
  </div>
))

it('renders correctly with list filled', () => {
  const props = { foo: 'bar' }
  const Component = renderEmailSent(props)
  const tree = renderer.create(<Component bar="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
