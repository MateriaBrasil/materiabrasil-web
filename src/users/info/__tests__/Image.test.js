import React from 'react'
import renderer from 'react-test-renderer'

import Image from '../Image'

describe('when editable', () => {
  it('renders correctly', () => {
    const props = { editable: true, name: 'foo-name' }
    const tree = renderer.create(<Image {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when not editable', () => {
  it('renders correctly', () => {
    const props = { name: 'foo-name' }
    const tree = renderer.create(<Image {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
