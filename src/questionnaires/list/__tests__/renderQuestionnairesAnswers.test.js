import React from 'react'
import renderer from 'react-test-renderer'

import renderQuestionnairesAnswers from '../renderQuestionnairesAnswers'

jest.mock('croods', () => ({
  New: props => <div {...props}>New - {props.render([{ foo: 'bar' }])}</div>,
}))

jest.mock('../renderNew', () =>
  jest.fn(props => routeProps => <div {...props}>renderNew</div>),
)
jest.mock('../renderCreated', () =>
  jest.fn(props => routeProps => <div {...props}>renderCreated</div>),
)

it('renders correctly', () => {
  const props = {
    questionnairesAnswers: [
      { id: 12, questionId: 1234, optionId: 1 },
      { id: 13, questionId: 11, optionId: 1 },
    ],
  }
  const list = ['foo-question', 'foo-question2']
  const listProps = { actions: { setList: jest.fn() } }

  const tree = renderer
    .create(renderQuestionnairesAnswers(props)(list, listProps))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
