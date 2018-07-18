import React from 'react'
import { reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'

import TextField from '../form/TextField'

export default reduxForm({ form: 'search' })(props => {
  const { handleSubmit, history } = props

  return (
    <form
      onSubmit={handleSubmit(values =>
        history.push(`/search?term=${values.term}`),
      )}
    >
      <TextField name="term" label="Pesquisar" type="text" />
      <Button color="primary" type="submit">
        Buscar
      </Button>
    </form>
  )
})
