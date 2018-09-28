import React from 'react'
import renderer from 'react-test-renderer'

import TechnicalSpecification from '../TechnicalSpecification'

jest.mock('../../FileDownloadIcon', () => props => <div {...props}>FileDownloadIcon</div> )

it('renders correctly', () => {
  const props = {
    technicalSpecificationUrl: 'foo-url',
    style: { foo: 'style' },
  }
  const tree = renderer.create(<TechnicalSpecification {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
