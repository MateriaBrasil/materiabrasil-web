import React from 'react'
import renderer from 'react-test-renderer'

import CaptionWithText from '../CaptionWithText'

it('renders correctly', () => {
  const props = {
    caption: 'foo-caption',
    subheading: 'foo-subheading',
    style: { foo: 'style' },
  }
  const tree = renderer.create(<CaptionWithText {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
