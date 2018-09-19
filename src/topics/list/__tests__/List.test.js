import React from 'react'
import renderer from 'react-test-renderer'
import List from '../List'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

const list = [
  {
    id: 123,
    user: {
      id: 111,
      firstName: 'Foo',
      lastName: 'Bar',
    },
    subject: 'Foo subject',
    text: 'Foo text',
  },
  {
    id: 321,
    user: {
      id: 222,
      firstName: 'Bar',
      lastName: 'Foo',
    },
    subject: 'Bar subject',
    text: 'Bar text',
  },
]

it('renders correctly', () => {
  const tree = renderer.create(<List list={list} />).toJSON()
  expect(tree).toMatchSnapshot()
})
