import React from 'react'
import renderer from 'react-test-renderer'
import List from '../List'

const list = [
  {
    questions: [
      {
        descripton: 'question1',
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
        descripton: 'question2',
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
  const tree = renderer.create(<List list={list} />).toJSON()
  expect(tree).toMatchSnapshot()
})
