import React from 'react'
import renderer from 'react-test-renderer'

import withDriversQuestions from '../withDriversQuestions'

jest.mock('croods', () => ({
  List: props => (
    <div {...props}>
      List -{' '}
      {props.render([
        {
          id: 1,
          driver: 'social_human',
          questions: [
            {
              id: 1,
              description: 'question description',
            },
          ],
        },
        {
          id: 2,
          driver: 'management_and_governance',
          questions: [
            {
              id: 2,
              description: 'question description',
            },
          ],
        },
        {
          id: 3,
          driver: 'process',
          questions: [
            {
              id: 3,
              description: 'question description',
            },
          ],
        },
        {
          id: 4,
          driver: 'raw_material',
          questions: [
            {
              id: 4,
              description: 'question description',
            },
          ],
        },
      ])}
    </div>
  ),
}))

it('renders correctly', () => {
  const Component = withDriversQuestions(props => (
    <div {...props}>React Component</div>
  ))
  const tree = renderer.create(<Component foo="bar" />).toJSON()
  expect(tree).toMatchSnapshot()
})
