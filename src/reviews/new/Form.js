import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from 'redux-form-validators'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import Error from '../../Error'
import TextField from '../../form/TextField'

import Rating from './Rating'

class Form extends Component {
  render() {
    const { handleSubmit, onSubmit, error: reduxFormError } = this.props
    const { createError, submitting, id, change } = this.props
    const error = reduxFormError || createError

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Rating onChange={value => change('rating', value)} />
          <Field component="input" type="hidden" name="rating" />
          <TextField
            name="text"
            label="Escreva sua avaliação"
            type="text"
            multiline
            validate={[required()]}
          />
          {error && <Error>{error}</Error>}
        </DialogContent>
        <DialogActions>
          <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
            <Button color="primary">Fechar</Button>
          </Link>
          <Button color="primary" type="submit" disabled={submitting}>
            Enviar
          </Button>
        </DialogActions>
      </form>
    )
  }
}

export default reduxForm({ form: 'reviews' })(Form)
