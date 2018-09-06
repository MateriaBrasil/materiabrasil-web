import React from 'react'
import renderer from 'react-test-renderer'

import Categories from '../Categories'

jest.mock('croods', () => ({
  New: props => <div {...props}>New - {props.render([{ foo: 'bar' }])}</div>,
}))


it('renders correctly', () => {
  const props = { parent: { multipleChoice: true}, categories: [{id: 1234, name: 'foo'}, {id: 4321, name: 'bar'}] }
  const tree = renderer.create(<Categories {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
