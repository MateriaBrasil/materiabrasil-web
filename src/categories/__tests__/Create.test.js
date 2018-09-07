import React from 'react'
import renderer from 'react-test-renderer'

import Create from '../Create'

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>
      New - {props.render([{ foo: 'bar' }])} - renderCreated -{props.render([
        { foo: 'bar' },
      ])}
    </div>
  ),
}))

it('render correctly', () => {
  const props = {
    category: { name: 'foo-name' },
    parent: { id: 1234, multipleChoice: true },
  }
  const tree = renderer.create(<Create {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
