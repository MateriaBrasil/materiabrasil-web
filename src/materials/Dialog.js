import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';
import Dialog from '@material-ui/core/Dialog';

import {
  DialogTitleExtended,
  DialogContentExtend,
} from './questionnairesStyles';

import withMobileDialog from '@material-ui/core/withMobileDialog';

import DialogActions from './DialogActions';
import closeModal from './closeModal';

export default withMobileDialog()(
  class extends Component {
    constructor(props) {
      super(props);
      this.onDialogSubmit = this.onDialogSubmit.bind(this);
    }

    onDialogSubmit(event) {
      const { handleSubmit, onSubmit } = this.props;
      if (isFunction(handleSubmit)) {
        return handleSubmit(onSubmit)(event);
      }
    }

    render() {
      const { title, children, fullScreen, match, history } = this.props;
      const { onCloseModel } = this.props;
      const { closeButtonName } = this.props || false;
      const { id } = match.params;
      const handleCloseModal = onCloseModel || closeModal({ history, id });

      console.log('------------------------------------');
      console.log(children);
      console.log('------------------------------------');

      return (
        <Dialog
          fullScreen={fullScreen}
          open
          aria-labelledby="responsive-dialog-title"
          onBackdropClick={handleCloseModal}
          onEscapeKeyDown={handleCloseModal}
          fullWidth
        >
          <form onSubmit={this.onDialogSubmit}>
            <DialogTitleExtended id="responsive-dialog-title">
              {title}
            </DialogTitleExtended>

            <DialogContentExtend>{children}</DialogContentExtend>
            <DialogActions {...this.props} onCloseModal={handleCloseModal} />
          </form>
        </Dialog>
      );
    }
  },
);
