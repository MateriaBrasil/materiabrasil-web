import React from 'react'
import { New } from 'croods'

import renderNew from './renderNew'
import renderCreated from './renderCreated'

export default props => (list, { actions }) => {
  return (
    <New
      name="answers"
      path="/answers"
      render={renderNew({ ...props, questionnairesAnswers: list })}
      renderCreated={renderCreated({
        ...props,
        questionnairesAnswers: list,
        setAnswers: actions.setList,
      })}
    />
  )
}
