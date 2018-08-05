import React from 'react'

import Form from './Form'

export default props => ({ info, update, updating, error }) => {
  return (
    <Form
      onSubmit={update}
      submitting={updating}
      updateError={error}
      initialValues={info}
      {...props}
    />
  )
}
