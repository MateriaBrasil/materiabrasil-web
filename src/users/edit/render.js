import React from 'react'

import Form from './Form'
import updateSelectedParams from './updateSelectedParams'

export default props => ({ info, update, updating, error }) => (
  <Form
    onSubmit={updateSelectedParams(update)}
    submitting={updating}
    updateError={error}
    initialValues={info}
    {...props}
  />
)
