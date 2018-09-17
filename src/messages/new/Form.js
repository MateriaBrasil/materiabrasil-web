import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { required } from 'redux-form-validators'

import Dialog from 'materials/Dialog'
import Error from 'Error'
import TextField from '../../form/TextField'

class Form extends Component {
  render() {
    const { error: reduxFormError, createError } = this.props
    const error = reduxFormError || createError

    return (
      <Dialog {...this.props} title="Enviar mensagem" callToAction="Enviar">
        <TextField
          name="text"
          label="Escreva sua mensagem"
          multiline
          validate={[required()]}
        />
        <Error>{error}</Error>
      </Dialog>
    )
  }
}

export default reduxForm({ form: 'messages' })(Form)
