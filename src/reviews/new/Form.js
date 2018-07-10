import React from 'react'
import { reduxForm } from 'redux-form'
import { required, numericality } from 'redux-form-validators'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import Error from '../../Error'
import TextField from '../../form/TextField'

export default reduxForm({ form: 'reviews' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const { submitting, id } = props
  const error = reduxFormError || createError

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent>
        <TextField
          name="rating"
          label="Nota"
          type="number"
          validate={[required(), numericality({ int: true, '>=': 1, '<=': 5 })]}
        />
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
})
