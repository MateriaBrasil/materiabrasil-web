import React from 'react'

import New from '../New'
import Form from './Form'

export default props => {
  return (
    <New
      name="resetPassword"
      method="put"
      path="/auth/password"
      form={Form}
      {...props}
    />
  )
}
