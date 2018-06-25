import React from 'react'
import omit from 'lodash/omit'
import map from 'lodash/map'

import SingleColumn from '../SingleColumn'
import DefaultForm from '../form/Form'
import TextField from '../form/TextField'

export default props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const { callToAction, fields, children } = props
  const error = reduxFormError || createError
  const formProps = omit(props, ['handleSubmit', 'onSubmit', 'error'])

  return (
    <SingleColumn>
      <DefaultForm
        callToAction={callToAction}
        onSubmit={handleSubmit(onSubmit)}
        error={error}
        {...formProps}
      >
        {map(fields, (field, key) => {
          return <TextField key={key} {...field} />
        })}
      </DefaultForm>
      {children}
    </SingleColumn>
  )
}
