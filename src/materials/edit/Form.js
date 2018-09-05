import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import Dialog from 'materials/Dialog'
import Error from 'Error'
import Fields from '../form/Fields'

export default reduxForm({ form: 'materials' })(
  class extends Component {
    render() {
      const { error: reduxFormError } = this.props
      const { updateError } = this.props
      const error = reduxFormError || updateError
      const title = 'Atualizar material'

      return (
        <Dialog {...this.props} title={title} callToAction={title}>
          <Fields />
          <Error>{error}</Error>
        </Dialog>
      )
    }
  },
)
