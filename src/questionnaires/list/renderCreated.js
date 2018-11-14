import React from 'react'
import List from './List'

export default props => ({ create }) => {
  const { questionnaires, questionnairesAnswers } = props
  return <List {...props} list={questionnaires} />
}
