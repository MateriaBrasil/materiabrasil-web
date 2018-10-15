import React from 'react'

import Form from './Form'

export default props => newProps => {
  return <Form title="Renovar senha" {...props} {...newProps} />
}
