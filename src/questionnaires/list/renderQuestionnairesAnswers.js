import React from 'react'
import { New } from 'croods'

import renderNew from './renderNew'
import renderCreated from './renderCreated'

export default props => list => {
  return (
    <New
      name="questionnairesAnswers"
      path="/answers"
      render={renderNew({ ...props, questionnairesAnswers: list })}
      renderCreated={renderCreated({ ...props, questionnairesAnswers: list })}
    />
  )
}
