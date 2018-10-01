import React from 'react'
import renderer from 'react-test-renderer'

import FileDownloadIcon from '../FileDownloadIcon'

jest.mock('@material-ui/core/Tooltip', () => props => (
  <div {...props}>Tooltip - {props.children}</div>
))

it('renders correctly', () => {
  const props = {
    url: 'foo-url',
    style: { foo: 'style' },
    tooltip: 'foo-text',
  }
  const tree = renderer.create(<FileDownloadIcon {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
