import React from 'react'
import renderer from 'react-test-renderer'

import Destroy from '../Destroy'

jest.mock('croods', () => ({
  Destroy: props => (
    <div {...props}>Destroy - {props.render([{ foo: 'bar' }])}</div>
  ),
}))

jest.mock('../renderDestroy', () =>
  jest.fn(props => list => <div {...props}>renderDestroy</div>),
)

it('renders correctly', () => {
  const tree = renderer.create(<Destroy id="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
