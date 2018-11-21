import find from 'lodash/find'

export default (questionnairesAnswers, question) =>
  find(questionnairesAnswers, ({ questionId }) => questionId === question.id)
