import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../Info', () => props => <div {...props}>Info</div>)

it('renders correctly', () => {
  const props = {
    bar: 'foo',
  }
  const infoProps = {
    info: {
      name: 'foo-name',
      listImageUrl: 'list-url',
    },
  }
  const info = {
    bar: 'foo',
  }
  const tree = renderer.create(render(props)(info, infoProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
