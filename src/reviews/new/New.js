import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import Form from './Form'
import createWithParams from './createWithParams'

class Review extends Component {
  render() {
    const { fullScreen, match, create, creating, error } = this.props
    const { params } = match
    const { id } = params

    return (
      <Dialog
        fullScreen={fullScreen}
        open
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Avalie</DialogTitle>
        <Form
          id={id}
          onSubmit={createWithParams(create, id)}
          submitting={creating}
          createError={error}
        />
      </Dialog>
    )
  }
}

export default withMobileDialog()(Review)
