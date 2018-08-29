import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from 'redux-form-validators'
import DialogContent from '@material-ui/core/DialogContent'

import Error from '../../Error'
import TextField from '../../form/TextField'
import DialogSubmit from '../../form/DialogSubmit'

import Rating from './Rating'
import onChange from './onChange'

class Form extends Component {
  render() {
    const { handleSubmit, onSubmit, error: reduxFormError } = this.props
    const { createError, change } = this.props
    const error = reduxFormError || createError

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Rating onChange={onChange(change)} />
          <Field component="input" type="hidden" name="rating" />
          <TextField
            name="text"
            label="Escreva sua avaliação"
            multiline
            validate={[required()]}
          />
          {error && <Error>{error}</Error>}
        </DialogContent>
        <DialogSubmit {...this.props} callToAction="Enviar" />
      </form>
    )
  }
}

export default reduxForm({ form: 'reviews' })(Form)
