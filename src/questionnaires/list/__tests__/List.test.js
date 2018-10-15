import React from 'react'
import renderer from 'react-test-renderer'
import List from '../List'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

const list = [
  {
    questions: [
      {
        description: 'question1',
        options: [
          {
            id: 1,
            description: 'option10',
          },
          {
            id: 2,
            description: 'option11',
          },
        ],
      },
      {
        description: 'question2',
        options: [
          {
            id: 1,
            description: 'option20',
          },
          {
            id: 2,
            description: 'option21',
          },
        ],
      },
    ],
    name: 'Foo text',
  },
]

it('renders correctly', () => {
  const tree = renderer
    .create(<List list={list} match={{ params: { id: '123' } }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
