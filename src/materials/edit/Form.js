import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import DialogContent from '@material-ui/core/DialogContent'

import DialogSubmit from '../../form/DialogSubmit'
import Error from '../../Error'
import Fields from '../form/Fields'

export default reduxForm({ form: 'materials' })(
  class extends Component {
    render() {
      const { handleSubmit, onSubmit, error: reduxFormError } = this.props
      const { updateError } = this.props
      const error = reduxFormError || updateError

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Fields />
            {error && <Error>{error}</Error>}
          </DialogContent>
          <DialogSubmit {...this.props} callToAction="Atualizar material" />
        </form>
      )
    }
  },
)
