import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../Info', () => props => <div {...props}>Info</div>)

it('renders correctly', () => {
  const props = {
    infoProps: {
      info: {
        name: 'foo-name',
        listImageUrl: 'list-url',
      },
    },
    bar: 'foo',
  }
  const tree = renderer
    .create(render(props)(props.infoProps.info, props.infoProps))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
