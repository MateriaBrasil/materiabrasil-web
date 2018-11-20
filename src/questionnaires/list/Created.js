import { Component } from 'react'
import find from 'lodash/find'

export default class extends Component {
  constructor(props) {
    super(props)

    const { setAnswers, questionnairesAnswers, created } = props

    const answer = find(
      questionnairesAnswers,
      ({ questionId }) => questionId === created.questionId,
    )

    answer.optionId = created.optionId

    setAnswers(questionnairesAnswers)
  }

  render() {
    return null
  }
}
