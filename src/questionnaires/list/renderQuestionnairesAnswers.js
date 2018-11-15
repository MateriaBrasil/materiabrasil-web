import React from 'react'
import { New } from 'croods'

import renderNew from './renderNew'
import renderCreated from './renderCreated'

export default parentProps => props => {
  return (
    <New
      name="questionnairesAnswers"
      path="/answers"
      render={renderNew({ ...props, ...parentProps })}
      renderCreated={renderCreated({ ...props, ...parentProps })}
    />
  )
}
