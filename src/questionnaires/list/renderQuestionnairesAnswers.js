import React from 'react'
import { New } from 'croods'

import renderNew from './renderNew'
import renderCreated from './renderCreated'

export default parentProps => (questionnairesAnswers, { actions }) => {
  const props = {
    ...parentProps,
    setquestionnairesAnswers: actions.setList,
    questionnairesAnswers,
  }

  return (
    <New
      name="questionnairesAnswers"
      path="/material_categories"
      render={renderNew(props)}
      renderCreated={renderCreated(props)}
    />
  )
}
