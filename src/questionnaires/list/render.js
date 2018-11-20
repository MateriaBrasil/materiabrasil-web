import React from 'react'
import { List } from 'croods'
import renderList from './renderQuestionnairesAnswers'

export default props => questionnaires => {
  return (
    <List
      name="answers"
      path={`/suppliers/${props.match.params.id}/answers`}
      render={renderList({ ...props, questionnaires })}
    />
  )
}
