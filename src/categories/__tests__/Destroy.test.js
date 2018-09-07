import React from 'react'
import renderer from 'react-test-renderer'

import Destroy from '../Destroy'

jest.mock('croods', () => ({
  Destroy: props => <div {...props}>Destroy - {props.render()}</div>,
}))

it('render correctly', () => {
  const props = {
    category: { id: 1234, name: 'foo-name' },
    materialCategory: { id: 1234 },
    parent: { id: 1234 },
  }
  const tree = renderer.create(<Destroy {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
