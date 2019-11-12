import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

export default props => {
  console.log(props);

  const { callToAction, actionsChildren, closeButton = true } = props;
  const { onCloseModal, valid, submitting, closeButtonName } = props;
  const showActions = actionsChildren || closeButton || callToAction;

  return showActions ? (
    <DialogActions>
      {closeButton && (
        <Button color="primary" onClick={onCloseModal} disabled={submitting}>
          {closeButtonName ? 'Concluir' : 'Fechar'}
        </Button>
      )}
      {callToAction && (
        <Button color="primary" type="submit" disabled={!valid || submitting}>
          {callToAction}
        </Button>
      )}
      {actionsChildren}
    </DialogActions>
  ) : null;
};
