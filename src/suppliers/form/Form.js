import React from 'react'
import { reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'

import SingleColumn from '../../SingleColumn'
import Error from '../../Error'
import Fields from './Fields'

export default reduxForm({ form: 'suppliers' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const { submitting, buttonText } = props
  const error = reduxFormError || createError

  return (
    <SingleColumn>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fields />
        <div style={{ marginTop: 30, textAlign: 'right' }}>
          <Button
            variant="raised"
            color="primary"
            type="submit"
            disabled={submitting}
          >
            {buttonText}
          </Button>
        </div>
        {error && <Error>{error}</Error>}
      </form>
    </SingleColumn>
  )
})
