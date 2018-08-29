import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import Error from '../../Error'
import Fields from '../form/Fields'

class Form extends Component {
  render() {
    const { handleSubmit, onSubmit, error: reduxFormError } = this.props
    const { updateError, submitting, id } = this.props
    const error = reduxFormError || updateError

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Fields />
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

export default reduxForm({ form: 'materials' })(Form)
