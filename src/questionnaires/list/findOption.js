import find from 'lodash/find'

export default (answer, question) =>
  answer && find(question.options, ({ id }) => id === answer.optionId)
