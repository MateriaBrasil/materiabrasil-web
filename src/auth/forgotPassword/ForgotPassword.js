import React from 'react'

import New from '../New'
import Form from './Form'
import renderCreated from './renderCreated'

export default props => {
  return (
    <New
      name="password"
      path="/auth/password"
      form={Form}
      {...props}
      renderCreated={renderCreated(props)}
    />
  )
}
