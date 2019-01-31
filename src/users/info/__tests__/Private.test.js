import React from 'react'
import renderer from 'react-test-renderer'

import Private from '../Private'

jest.mock('croods', () => ({
  Edit: props => (
    <div>
      {props.children}
      {props.render({
        info: { id: 1, user_id: 1, private: false },
        update: () => {},
      })}
      {props.renderUpdated()}
    </div>
  ),
}))

it('renders correctly', () => {
  const props = { name: 'foo-name', bar: 'foo' }
  const tree = renderer.create(<Private {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
