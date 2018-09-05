import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from 'redux-form-validators'

import Error from '../../Error'
import TextField from '../../form/TextField'
import Dialog from 'materials/Dialog'

import Rating from './Rating'
import onChange from './onChange'

class Form extends Component {
  render() {
    const { error: reduxFormError } = this.props
    const { createError, change } = this.props
    const error = reduxFormError || createError

    return (
      <Dialog {...this.props} title="Avaliar" callToAction="Enviar">
        <Rating onChange={onChange(change)} />
        <Field component="input" type="hidden" name="rating" />
        <TextField
          name="text"
          label="Escreva sua avaliação"
          multiline
          validate={[required()]}
        />
        {error && <Error>{error}</Error>}
      </Dialog>
    )
  }
}

export default reduxForm({ form: 'reviews' })(Form)
