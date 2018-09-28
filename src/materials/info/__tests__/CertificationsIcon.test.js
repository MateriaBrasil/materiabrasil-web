import React from 'react'
import renderer from 'react-test-renderer'

import CertificationsIcon from '../CertificationsIcon'

jest.mock('../../FileDownloadIcon', () => props => <div {...props}>FileDownloadIcon</div> )

it('renders correctly', () => {
  const props = {
    certificationsUrl: 'foo-url',
    style: { foo: 'style' },
  }
  const tree = renderer.create(<CertificationsIcon {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
