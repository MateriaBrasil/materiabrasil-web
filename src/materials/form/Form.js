import React from 'react'
import { reduxForm } from 'redux-form'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Submit from '../../form/Submit'
import SingleColumn from '../../SingleColumn'
import Error from '../../Error'
import Fields from './Fields'

export default reduxForm({ form: 'materials' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const { submitting, buttonText } = props
  const error = reduxFormError || createError

  return (
    <SingleColumn>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Fields />
            {error && <Error>{error}</Error>}
            <Submit callToAction={buttonText} disabled={submitting} />
          </form>
        </CardContent>
      </Card>
    </SingleColumn>
  )
})
